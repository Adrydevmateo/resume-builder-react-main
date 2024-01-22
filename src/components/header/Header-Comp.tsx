import { Link } from "wouter"
import { useMainStore } from "@stores/main/main.store"

export default () => {
    const { language, SetLanguage } = useMainStore()
    return (
        <header>
            <h1>Header</h1>
            <button onClick={() => SetLanguage('en')}>En</button>
            <button onClick={() => SetLanguage('es')}>Es</button>
            <nav>
                <Link href="/" hrefLang={language}>Home</Link>
            </nav>
        </header>
    )
}