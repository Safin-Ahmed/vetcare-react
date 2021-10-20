import './App.css';
import HomeNavbar from './components/Navbar/HomeNavbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import AuthProvider from './Contexts/AuthProvider';
import Login from './Pages/User/Login';
import PrivateRoute from './Pages/User/PrivateRoute';
import NotFound from './Pages/NotFound';

function App() {

  return (
   <AuthProvider>
      <Router>
      <HomeNavbar></HomeNavbar>
      <Switch>
        <Route exact path = "/"><Home></Home></Route>
        <Route path = "/home"><Home></Home></Route>
        <PrivateRoute path = "/about"><AboutUs></AboutUs></PrivateRoute>
        <Route path = "/contact"><Contact></Contact></Route>
        <PrivateRoute path = "/service/:serviceId"><ServiceDetail></ServiceDetail></PrivateRoute>
        <Route path = "/login"><Login></Login></Route>
        <Route path = "*"><NotFound></NotFound></Route>
      </Switch>
      <Footer></Footer>
    </Router>
   </AuthProvider>
  );
}

export default App;
