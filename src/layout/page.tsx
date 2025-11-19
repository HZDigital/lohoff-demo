import { Header } from "@/layout/header";
import { Footer } from "@/layout/footer";
import { useLocation } from "react-router-dom";
import { DemoSidebar } from "./demo-sidebar";
import { SidebarInset } from "@/components/ui/sidebar";

export function Page({ children }: { children: React.ReactNode }) {

  const isPlayground = useLocation().pathname === "/playground";


  return isPlayground ? (
    <>
      <DemoSidebar />
      <SidebarInset className="h-screen overflow-y-auto scrollbar-thin">
        {children}
      </SidebarInset>
    </>
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