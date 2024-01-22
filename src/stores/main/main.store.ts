import { create } from "zustand"
import { IMainStore } from "./main.interfaces"
import { TLanguage } from "@/internationalization/internationalization.types"

export const useMainStore = create<IMainStore>((set) => ({
    language: 'en',
    SetLanguage: (language: TLanguage) => set(state => ({ ...state, language })),
    SetPageTitle: (title: string) => document.title = title
}))