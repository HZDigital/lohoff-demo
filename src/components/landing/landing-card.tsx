import { ChevronRight } from "lucide-react";
import { LohoffDot } from "@/components/common/lohoff-dot";
import { useUIStore } from "@/store/ui-store";

interface LandingCardProps {
  card: {
    title: string;
    description: string;
    link: string;
    badge?: string;
  };
}

export function LandingCard({ card }: LandingCardProps) {
  const { lang } = useUIStore();

  return (
    <div className="bg-background/50 px-5 py-8 hover:shadow-md shadow-black/20 shadow-xl rounded-[2px] border-4 border-transparent hover:border-primary/10 transition-all duration-200 ease-in-out mt-4 hover:mt-3 hover:mb-1 space-y-4"   >
      <div className="flex items-center justify-between">
        <h2 className="font-roboto text-lg font-bold flex items-baseline">{card.title.toUpperCase()}<span className="text-primary"><LohoffDot size="sm"/></span></h2>
        {card.badge && <div className="bg-secondary text-secondary-foreground py-1 px-2 rounded-[2px] text-xs">{card.badge.toUpperCase()}</div>}
      </div>
      <div>{card.description}</div>
      <div className="flex items-center justify-end">
        <a href={card.link} className="flex items-center gap-4 pl-8 pr-6 py-2 bg-primary text-primary-foreground rounded-[2px] hover:bg-primary-hover">{lang === "DE" ? "MEHR ERFAHREN" : "LEARN MORE"} <ChevronRight /></a>
      </div>
    </div>
  )
}