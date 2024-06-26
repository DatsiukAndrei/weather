import { Link as RemixLink } from "@remix-run/react";
import type { PropsWithChildren } from "react";

interface LinkProps {
  to: string;
  prefetch?: "none" | "intent" | "render" | "viewport";
}

function Link({
  to, prefetch = "none", children,
}: PropsWithChildren<LinkProps>) {

  return (
    <RemixLink
      to={to}
      prefetch={prefetch}
      className="text-blue-500"
    >
      {children}
    </RemixLink>
  );
}

export {Link};
