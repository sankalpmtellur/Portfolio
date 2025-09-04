import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <section id="contact" className="h-screen bg-gray-100"></section>
        </>
    );
}