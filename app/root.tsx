import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import { type PropsWithChildren } from "react";
import "./tailwind.css";

export function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
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



function App() {
  return <Outlet />;
}

export default App;
