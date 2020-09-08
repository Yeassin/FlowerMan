import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import About from './pages/About';
import Shop from './pages/Shop';
import Services from './pages/Services';
import Designs from './pages/Designs';

function App() {
  
  return (
    <div className="App">
      <Header />

      <HashRouter>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/shop" component={Shop} />
          <Route path="/designs" component={Designs} />
          <Route path="/services" component={Services} />

      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
