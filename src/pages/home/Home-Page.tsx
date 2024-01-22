import { useMainStore } from "@/stores/main/main.store"

export default () => {
    const { SetPageTitle, language } = useMainStore()
    const homeTitle = {
        en: 'Home Page',
        es: 'Pagina de Inicio'
    }
    SetPageTitle(homeTitle[language])
    return (
        <div>
            <h1>Home Page</h1>
        </div>
    )
}