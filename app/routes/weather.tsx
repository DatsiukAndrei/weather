import type { MetaFunction } from "@remix-run/node";
import { ClientLoaderFunctionArgs, json, useLoaderData, useSearchParams } from "@remix-run/react";
import { loader } from "~/routes/_index";
import { Layout } from "~/components/layuot/Layout";
import { type  ChangeEvent } from "react";
import { getCityWeather, getCoordinatesByCity, ResponseWeatherDataI } from "~/domain/weather.client";
import { Select } from "~/components/interactions/Select";
import { cities } from "~/lib/constants/cities";
import { SEARCH_PARAMS } from "~/lib/constants/searchParams";
import dayjs, { formatTemplates } from "~/lib/dayjs";
import { Link } from "~/components/interactions/Link";
import { generateWeatherStatus } from "~/lib/generateWeatherStatus";

export const meta: MetaFunction = () => {
  return [
    { title: "Weather" },
    { name: "description", content: "Weather app" },
  ];
};

//Better add caching to avoid unnecessary requests
//https://remix.run/resources/remix-client-cache
export const clientLoader = async ({
  request,
}:ClientLoaderFunctionArgs) => {
  const url = new URL(request.url);

  const city = url.searchParams.get(SEARCH_PARAMS.CITY);
  if (!city) {
    return {
      status: 404,
      error: new Error("City not found")
    }
  }

  const coordinates  = await getCoordinatesByCity({city});

  if (!coordinates) {
    return {
      status: 404,
      error: new Error("Coordinates not found")
    }
  }

  const weatherData = await getCityWeather({latitude: coordinates?.latitude, longitude: coordinates?.longitude});

  return json(weatherData);
};


function Weather() {
  const data = useLoaderData<typeof loader>() as ResponseWeatherDataI
  const [searchParams, setSearchParams] = useSearchParams();

  const city = searchParams.get(SEARCH_PARAMS.CITY);

  const onCityChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSearchParams({city: event.target.value});
  }

  if (!data) {
    return (
      <Layout>
        <h1 className="text-3xl font-bold">City not found</h1>
      </Layout>
    )
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold text-teal-700 mb-4">Current Weather</h1>
      <Select
        value={city as string}
        options={cities.map((city) => ({
          value: city,
          label: city
        }))}
        onChange={onCityChange}
      />
      <img src="/weather.png" alt="Weather" className="w-[200px] h-[200px] mb-2 object-cover"/>
      <h3 className="text-xl font-semibold text-teal-800 mb-2">{generateWeatherStatus(data.temperature)} - {data.temperature}°C</h3>
      <h2 className="text-lg text-teal-700">{dayjs(data.time).format(formatTemplates.date)}</h2>
      <Link to="/giveaways">Source code</Link>
    </Layout>
  );
}

export default Weather;
