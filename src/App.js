import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import HomeNavbar from './components/Navbar/HomeNavbar';
import Banner from './components/Banner/Banner';
import OurTeam from './components/OurTeam/OurTeam';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div>
      <HomeNavbar></HomeNavbar>
      <Banner></Banner>
      <Services></Services>
      <OurTeam></OurTeam>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
