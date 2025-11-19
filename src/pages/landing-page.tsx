import { LohoffDot } from "@/components/common/lohoff-dot"
import { LandingCard } from "@/components/landing/landing-card"

export function LandingPage() {

  const backgroundStyle = {
    backgroundImage: "url(https://www.lohoff.com/acapsy/img/bg-image.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }

  const CARDS = [
    {
      title: "Karriere", 
      description: "Wir stellen erfahrene Fachkräfte ein, die klug, ehrgeizig und leidenschaftlich für Ihre Qualität einstehen. Machen Sie den Unterschied!",
      link: "/",
      badge: "5 neue Stellen"
    },
    {
      title: "Lösungen",
      description: "Unser Angebot ist so vielseitig wie der Vorsorgemarkt selbst. Altersvorsorge in einer nativen App oder als Webportal. SaaS & Cloud.",
      link: "/",
    },
    {
      title: "Über uns",
      description: "Wer wir sind: PENSION PIONEERS.\n Wir sind Komplettanbieter für betriebliche Altersvorsorge und Lebensarbeitszeitmodelle.",
      link: "/",
    }
  ]


  return (
    <div className="w-full h-full px-[10%] pt-20 flex flex-col justify-center gap-4" style={backgroundStyle}>
      <div className="text-6xl font-bold font-roboto flex items-baseline">PENSION PIONEERS<LohoffDot size="lg"/></div>
      <div className="text-lg font-roboto font-bold flex items-baseline">LOHOFF<LohoffDot size="sm"/> <div className="ml-2">STELLT SICH VOR</div></div>
      <div className="grid md:grid-cols-3 gap-4 pt-10">
        {CARDS.map((card) => (
          <LandingCard key={card.title} card={card} />
        ))}
      </div>
    </div>
  )
}