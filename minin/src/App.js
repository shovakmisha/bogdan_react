import './App.css';
import Header from "./components/Header";
import TeachingSection from "./components/TeachingSection";
import DifferencesSection from "./components/DifferencesSection";
import IntroSection from "./components/IntroSection";

function App() {
    return <>
        <Header />
        <IntroSection />
        <main>
            <TeachingSection />
            <DifferencesSection />
        </main>
    </>
}

export default App
