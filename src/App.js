import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import Contact from "./components/Contact"
import Footer from "./components/Footer";
import Restaurantdetail from "./components/Restaurantdetail";

function App() {
  return (
    
    <Router>
      <Header/>
      <Routes>
        <Route path= '/' element= {<Home/>} />
        <Route path= '/About' element= {<About/>} />
        <Route path= '/Contact' element= {<Contact/>} />
        <Route path= '/Restaurantdetail/:id' element= {<Restaurantdetail/>} />
      </Routes>
      <Footer/>
    </Router>
   
  );
}

export default App;
