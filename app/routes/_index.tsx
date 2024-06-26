import routes from "~/lib/constants/routes";
import { redirect } from "@remix-run/react";

export async function loader() {
  return redirect(routes.weather);
}
