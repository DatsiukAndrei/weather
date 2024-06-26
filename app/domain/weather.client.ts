interface CityWeatherParamsI {
  latitude: number;
  longitude: number;
}

export interface ResponseWeatherDataI {
  interval: number;
  is_day: number;
  temperature: number;
  time: string;
  weathercode: number;
  winddirection: number;
  windspeed: number;
}

export const getCityWeather = async ({latitude , longitude}:CityWeatherParamsI):Promise<ResponseWeatherDataI> => {
  //Better to use environment variables
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      ...data.current_weather
    }

  } catch (error) {
    throw new Error("Failed to fetch weather data");
  }
}


export const getCoordinatesByCity = async ({city}: {city:string}) => {
  //Better to use environment variables
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!data?.results) {
      return null;
    }

    return {
      latitude: data?.results[0].latitude,
      longitude: data?.results[0].longitude
    }

  } catch (error) {
    throw new Error("Failed to fetch coordinates");
  }
}
