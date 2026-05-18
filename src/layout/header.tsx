import { cn } from "@/lib/utils";
import { X, Globe } from "lucide-react";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useUIStore } from "@/store/ui-store";

export function Header({ isPlayground }: { isPlayground: boolean }) {
  const { lang, setLang } = useUIStore();
  const [location, setLocation] = useState("Start");
  

  const HEADER_ITEMS = [
    {
      label: "Start",
      href: "/"
    },
    {
      label: lang === "FR" ? "Actualités" : lang === "DE" ? "Aktuelles" : "News",
      href: "/",
    },
    {
      label: lang === "FR" ? "À propos" : lang === "DE" ? "Über uns" : "About Us",
      href: "/",
    },
    {
      label: lang === "FR" ? "Solutions" : lang === "DE" ? "Lösungen" : "Solutions",
      href: "/",
    },
    {
      label: lang === "FR" ? "Carrière" : lang === "DE" ? "Karriere" : "Career",
      href: "/",
    },
    {
      label: lang === "FR" ? "Contact" : lang === "DE" ? "Kontakt" : "Contact",
      href: "/",
    },
    {
      label: "Playground",
      href: "/playground",
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
        <div className="flex items-center h-20 px-[15px] text-muted-foreground gap-2">
          <Globe size={16} className="mb-0.5" />
          <Select value={lang} onValueChange={(v) => setLang(v as "DE" | "EN" | "FR")}>
            <SelectTrigger className="w-[70px] border-none shadow-none focus:ring-0 text-[12.75px] font-roboto">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-background">
              <SelectItem value="DE">DE</SelectItem>
              <SelectItem value="EN">EN</SelectItem>
              <SelectItem value="FR">FR</SelectItem>
            </SelectContent>
          </Select>
        </div>
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