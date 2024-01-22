import { TLanguage } from "@/internationalization/internationalization.types"

export interface IMainStoreState {
    language: TLanguage
}

export interface IMainStoreActions {
    SetLanguage: (language: TLanguage) => void
    SetPageTitle: (title: string) => void
}

export interface IMainStore extends IMainStoreState, IMainStoreActions { }