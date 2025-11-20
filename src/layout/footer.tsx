import { useUIStore } from "@/store/ui-store";

export function Footer() {
  const { lang } = useUIStore();

  const FOOTER_ITEMS = [
    {
      label: lang === "DE" ? "AGB" : "Terms and Conditions",
      href: "/"
    },
    {
      label: lang === "DE" ? "Impressum / Datenschutz" : "Imprint / Privacy Policy",
      href: "/"
    }
  ]

  return (
    <footer className="w-full h-[50px] flex items-center justify-between bg-background font-roboto px-[10%] border-t border-muted">
      <div className="text-muted-foreground" style={{ letterSpacing: "1px" }}>©  2025 LOHOFF.</div>
      <div className="flex items-center w-1/2">
        {FOOTER_ITEMS.map((item) => (
          <a key={item.href} href={item.href} className="w-full flex justify-end items-center cursor-pointer text-muted text-sm">
            {item.label.toUpperCase()}
          </a>
        ))}
      </div>
    </footer>
  )
}