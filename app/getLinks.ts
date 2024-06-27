import { LinksFunction } from "@remix-run/node";

export const getLinks: LinksFunction = () => [
  {
    href: "/apple-touch-icon.png",
    rel: "apple-touch-icon",
    sizes: "180x180",
  },
  {
    href: "/favicon-32x32.png",
    rel: "icon",
    sizes: "32x32",
    type: "image/png",
  },
  {
    href: "/favicon-16x16.png",
    rel: "icon",
    sizes: "16x16",
    type: "image/png",
  },
  {
    href: "/site.webmanifest",
    rel: "manifest",
  },
  {
    color: "#5bbad5",
    href: "/safari-pinned-tab.svg",
    rel: "mask-icon",
  },
];
