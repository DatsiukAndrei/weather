import routes from "~/lib/constants/routes";
import { redirect } from "@remix-run/react";

//It's a good practice to redirect the user to a specific route
export const clientLoader = async () => {
   return redirect(routes.weather)
};

function Index() {
  return <></>
}

export default Index;
