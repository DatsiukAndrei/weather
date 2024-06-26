import { type PropsWithChildren } from "react";

function Layout({children}:PropsWithChildren){
  return (
    <div className="w-100 h-[100dvh] flex gap-6 flex-col items-center justify-center bg-blue-300">
      {children}
    </div>
  )
}

export {Layout}
