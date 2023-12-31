import  "./app.css";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";


const App = () => {
  return (<div>
    <section id="HomePage">    
      <Navbar/>
      <Hero/>
    </section>

    <section id="Services" className="section">
      <Parallax type="services"/>
    </section>

    <section className="section">
      <Services/>
    </section>

    <section id="Portfolio" className="section">
      <Parallax type="portfolio"/>
    </section>

    <Portfolio/>
    
    <section id="Contact" className="section">
      
      <Contact/>
    </section>
    <section id="About" className="section">About</section>

  </div>);
};

export default App;
