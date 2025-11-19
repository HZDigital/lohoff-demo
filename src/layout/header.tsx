import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useState } from "react";

export function Header({ isPlayground }: { isPlayground: boolean }) {
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
    <header className="w-full px-[10%] flex items-center justify-between bg-background font-roboto text-[12.75px]">
      <div className="flex items-center gap-2">
        <img src="https://www.lohoff.com/acapsy/img/logo.png" alt="Lohoff Logo" className="h-6 w-auto" />
        {isPlayground && <X />}
        {isPlayground && <img src="https://i0.wp.com/hz.digital/wp-content/uploads/2024/02/hz-digital.png?fit=1429%2C330&ssl=1" alt="HZ Digital Logo" className="h-8 w-auto" />}

      </div>
      {!isPlayground && (
        <div className="flex">
          {HEADER_ITEMS.map((item) => (
            <HeaderItem key={item.href} label={item.label} href={item.href} location={location} setLocation={setLocation} />
          ))}
        </div>
      )}
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
        "flex items-center h-20 px-[15px] cursor-pointer hover:bg-accent text-muted-foreground hover:text-accent-foreground",
        selected && "font-bold text-primary hover:text-primary"
      )}
      onClick={() => setLocation(label)}
    >
      {label.toUpperCase()}
    </a>
  )
}