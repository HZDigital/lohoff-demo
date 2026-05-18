import { LohoffDot } from "@/components/common/lohoff-dot"
import { LandingCard } from "@/components/landing/landing-card"
import { useUIStore } from "@/store/ui-store";

export function LandingPage() {
  const { lang } = useUIStore();

  const backgroundStyle = {
    backgroundImage: "url(https://www.lohoff.com/acapsy/img/bg-image.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }

  const CARDS = [
    {
      title: lang === "FR" ? "Carrière" : lang === "DE" ? "Karriere" : "Career",
      description:
      lang === "FR"
        ? "Nous recrutons des professionnels expérimentés qui défendent votre qualité avec intelligence, ambition et passion. Faites la différence !"
        : lang === "DE"
        ? "Wir stellen erfahrene Fachkräfte ein, die klug, ehrgeizig und leidenschaftlich für Ihre Qualität einstehen. Machen Sie den Unterschied!"
        : "We hire experienced professionals who stand for your quality with intelligence, ambition, and passion. Make a difference!",
      link: "/",
      badge: lang === "FR" ? "5 nouveaux postes" : lang === "DE" ? "5 neue Stellen" : "5 new positions"
    },
    {
      title: lang === "FR" ? "Solutions" : lang === "DE" ? "Lösungen" : "Solutions",
      description: lang === "FR"
        ? "Notre offre est aussi polyvalente que le marché de la prévoyance lui-même. Prévoyance vieillesse dans une application native ou en portail web. SaaS & Cloud."
        : lang === "DE"
        ? "Unser Angebot ist so vielseitig wie der Vorsorgemarkt selbst. Altersvorsorge in einer nativen App oder als Webportal. SaaS & Cloud."
        : "Our offer is as versatile as the pension market itself. Pension provision in a native app or as a web portal. SaaS & Cloud.",
      link: "/",
    },
    {
      title: lang === "FR" ? "À propos" : lang === "DE" ? "Über uns" : "About Us",
      description: lang === "FR"
        ? "Qui nous sommes : PENSION PIONEERS.\n Nous sommes un prestataire complet pour les retraites d'entreprise et les modèles de temps de travail à vie."
        : lang === "DE"
        ? "Wer wir sind: PENSION PIONEERS.\n Wir sind Komplettanbieter für betriebliche Altersvorsorge und Lebensarbeitszeitmodelle."
        : "Who we are: PENSION PIONEERS.\n We are a full-service provider for occupational pensions and lifetime working models.",
      link: "/",
    }
  ]


  return (
    <div className="w-full h-full px-[10%] pt-20 flex flex-col justify-center gap-4" style={backgroundStyle}>
      <div className="text-6xl font-bold font-roboto flex items-baseline">PENSION PIONEERS<LohoffDot size="lg"/></div>
      <div className="text-lg font-roboto font-bold flex items-baseline">LOHOFF<LohoffDot size="sm"/> <div className="ml-2">{lang === "FR" ? "SE PRÉSENTE" : lang === "DE" ? "STELLT SICH VOR" : "INTRODUCES ITSELF"}</div></div>
      <div className="grid md:grid-cols-3 gap-4 pt-10">
        {CARDS.map((card) => (
          <LandingCard key={card.title} card={card} />
        ))}
      </div>
    </div>
  )
}