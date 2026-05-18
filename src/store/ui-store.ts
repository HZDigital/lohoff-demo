import { create } from "zustand";

interface UIStates {
  lang: "DE" | "EN" | "FR";
  setLang: (lang: "DE" | "EN" | "FR") => void;
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  currentDemoTab: "introduction" | "demo-views";
  setCurrentDemoTab: (tab: "introduction" | "demo-views") => void;
}

export const useUIStore = create<UIStates>((set) => ({
  lang: "DE",
  setLang: (lang) => set({ lang }),
  theme: "light",
  setTheme: (theme) => set({ theme }),
  currentDemoTab: "introduction",
  setCurrentDemoTab: (tab) => set({ currentDemoTab: tab }),
}));