export function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen flex flex-col">
      <header className="p-2">
        <img src="https://www.lohoff.com/acapsy/img/logo.png" alt="Lohoff Logo" className="h-6 w-auto" />
      </header>
      {children}
    </div>
  )
}