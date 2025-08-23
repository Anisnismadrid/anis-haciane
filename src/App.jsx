import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/about";
import { Projects } from "./components/Projects";
import { Contact } from ".components/Contact.jsx";
import{Skills} from"./components/Skills";
import { Footer } from "./components/Footer";


export  function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <Navbar />
      <Home />
      <About/>
      <Projects />
      <Contact />
      <Skills/>
      <Footer />    
      
    </div>
    
  );
}
export default App;