import { cn } from "@/lib/utils";

export function LohoffDot({size = "sm"}: {size?: "xs" | "sm" | "md" | "lg" | "xl"}) {
  return (
    <div className={cn(
      "bg-primary rounded-full",
      size === "xs" && "w-0.5 h-0.5",
      size === "sm" && "w-1 h-1",
      size === "md" && "w-2 h-2",
      size === "lg" && "w-3 h-3",
      size === "xl" && "w-4 h-4",
    )}/>
  )
}