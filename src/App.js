
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Partner from './Partner';
import Arrivals from './Arrivals';
import SecondSection from './SecondSection';
import Favourites from './Favourites';
import Download from './Download';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Partner  />
      <Arrivals />
      <SecondSection />
      <Favourites />
      <Download />
      <Contact />
      <Footer />
      <div class="attribution">
            <p>Coded by <span class="pname"><a href="https://www.twitter.com/wildam_wildam" target="_blank">WilsonAdedamola</a></span></p>
      </div>
    </>
  );
}

export default App;
