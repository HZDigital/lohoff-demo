import { create } from "zustand";

interface UIStates {
  lang: "DE" | "EN";
  setLang: (lang: "DE" | "EN") => void;
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

export const useUIStore = create<UIStates>((set) => ({
  lang: "DE",
  setLang: (lang) => set({ lang }),
  theme: "light",
  setTheme: (theme) => set({ theme }),
}));