import './App.css';
import { useEffect } from 'react';
import HomeNavbar from './components/Navbar/HomeNavbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';

function App() {

  return (
    <Router>
      <HomeNavbar></HomeNavbar>
      <Switch>
        <Route exact path = "/"><Home></Home></Route>
        <Route path = "/home"><Home></Home></Route>
        <Route path = "/about"><AboutUs></AboutUs></Route>
        <Route path = "/contact"><Contact></Contact></Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
