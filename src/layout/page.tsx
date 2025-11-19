import { Header } from "@/layout/header";
import { Footer } from "@/layout/footer";

export function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <div className="h-[calc(100vh-80px-50px-1px)] overflow-y-auto scrollbar-thin">
        {children}
      </div>
      <Footer />
    </div>
  )
}