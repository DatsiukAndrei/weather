import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";

startTransition(() => {
  hydrateRoot(
    //@ts-expect-error - Ignore the error because RemixBrowser is not a valid HTML element
    document.querySelector("#app"),
    <StrictMode>
      <RemixBrowser />
    </StrictMode>
  );
});
