import  "./app.css";
import Navbar from "./components/navbar/Navbar";


const App = () => {
  return (<div>
    <section className="section">    
    <Navbar/>
    </section>

    <section className="section">Parallax</section>
    <section id="Services" className="section">Services</section>
    <section id="Portfolio" className="section">Parallax</section>
    <section className="section">Portfolio1</section>
    <section className="section">Portfolio2</section>
    <section className="section">Portfolio3</section>
    <section id="Contact" className="section">Contact</section>
    <section id="About" className="section">About</section>

  </div>);
};

export default App;
