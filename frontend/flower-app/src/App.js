import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home';
import HeaderComp from './component/HeaderComp'
import Footer from './component/FooterComp';
import About from './component/About';
import Contact from './component/Contact';
import Signup from './component/Signup';


function App() {
  return (
    <div>
      <HeaderComp/>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/signup" component={Signup}/>
        <Route />
      </Router>
      <Footer/>
    </div>

  );
}

export default App;
