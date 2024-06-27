import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import { Layout as PageLayout } from "~/components/layuot/Layout";
import { type PropsWithChildren } from "react";
import "./tailwind.css";
import { LinksFunction } from "@remix-run/node";
import { getLinks } from "~/getLinks";

export const links: LinksFunction = () => [...getLinks()];

export function Layout({ children }:PropsWithChildren) {

  return (
    <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Meta />
      <Links />
      <title>Weather</title>
    </head>
    <body>
    {children}
    <ScrollRestoration />
    <Scripts />
    </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function HydrateFallback() {
  return <PageLayout><h1 className="text-3xl font-bold text-teal-700 mb-4">Loading...</h1></PageLayout>;
}


export function ErrorBoundary() {
  const error = useRouteError();


  if (isRouteErrorResponse(error)) {
    let message: string;
    let title: string;

    switch (error.status) {
      case 401:
        title = "Unauthorized";
        message = "You are not authorized to view this page.";
        break;
      case 404:
        title = "Page not found";
        message = "Oops! Looks like you tried to visit a page that does not exist.";
        break;
      default:
        title = "Error";
        message = "An error occurred";
    }

    return (
      <PageLayout>
        <h1 className="text-3xl font-bold text-red-700 mb-4">{title}</h1>
        <p className="text-lg text-gray-600">{message}</p>
      </PageLayout>
    );
  }

  if (error instanceof Error) {
    return (
      <PageLayout>
        <h1 className="text-3xl font-bold text-red-700 mb-4">Error</h1>
        <p className="text-lg text-gray-600">{error.message}</p>
      </PageLayout>
    );
  }

  return <PageLayout><h1 className="text-3xl font-bold text-red-700 mb-4">Error</h1></PageLayout>;
}
