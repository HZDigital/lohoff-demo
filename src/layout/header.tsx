import { cn } from "@/lib/utils";
import { useState } from "react";

export function Header() {
  const [location, setLocation] = useState("Start");

  const HEADER_ITEMS = [
    {
      label: "Start",
      href: "/"
    },
    {
      label: "Aktuelles",
      href: "/",
    },
    {
      label: "Über uns",
      href: "/",
    },
    {
      label: "Lösungen",
      href: "/",
    },
    {
      label: "Karriere",
      href: "/",
    },
    {
      label: "Kontakt",
      href: "/",
    }
  ]

  return (
    <header className="w-full px-[270px] flex items-center justify-between bg-background font-roboto">
      <div>
        <img src="https://www.lohoff.com/acapsy/img/logo.png" alt="Lohoff Logo" className="h-6 w-auto" />
      </div>
      <div className="flex">
        {HEADER_ITEMS.map((item) => (
          <HeaderItem key={item.href} label={item.label} href={item.href} location={location} setLocation={setLocation} />
        ))}
      </div>
    </header>
  )
}

export function HeaderItem({
  label, href, location, setLocation
}: {
  label: string;
  href: string;
  location: string;
  setLocation: (loc: string) => void
}) {
  const selected = location === label;

  return (
    <a
      href={href}
      className={cn(
        "flex items-center h-20 px-[15px] text-sm hover:bg-accent text-muted-foreground hover:text-accent-foreground",
        selected && "font-bold text-primary hover:text-primary"
      )}
      onClick={() => setLocation(label)}
    >
      {label.toUpperCase()}
    </a>
  )
}