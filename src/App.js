import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import HomeNavbar from './components/Navbar/HomeNavbar';
import Banner from './components/Banner/Banner';
import OurTeam from './components/OurTeam/OurTeam';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';

function App() {

  return (
    <div>
      <HomeNavbar></HomeNavbar>
      <Banner></Banner>
      <Services></Services>
      <OurTeam></OurTeam>
      <Contact></Contact>
    </div>
  );
}

export default App;
