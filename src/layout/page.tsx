import { Header } from "@/layout/header";

export function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      {children}
    </div>
  )
}