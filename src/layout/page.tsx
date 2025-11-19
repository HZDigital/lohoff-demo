import { Header } from "@/layout/header";
import { Footer } from "@/layout/footer";
import { useLocation } from "react-router-dom";
import { DemoSidebar } from "./demo-sidebar";

export function Page({ children }: { children: React.ReactNode }) {

  const isPlayground = useLocation().pathname === "/playground";


  return isPlayground ? (
    <div className="w-screen h-screen flex flex-col">
      <DemoSidebar />
      <div className="h-[calc(100vh-32px)] pl-28 overflow-y-auto scrollbar-thin">
        {children}
      </div>
    </div>
  ) : (
    <div className="w-screen h-screen flex flex-col">
      <Header isPlayground={isPlayground} />
      <div className="h-[calc(100vh-80px-50px-1px)] overflow-y-auto scrollbar-thin">
        {children}
      </div>
      <Footer />
    </div>
  )
}