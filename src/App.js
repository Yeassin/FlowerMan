import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import About from './pages/About';
import Services from './pages/Services';
import Designs from './pages/Designs';
import PageNotFound from './pages/PageNotFound';

function App() {

  return (
    <div className="App">
      <Header />

      <Router basename="/FlowerMan">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/designs" component={Designs} />
          <Route path="/services" component={Services} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>


      <Footer />
    </div>
  );
}

export default App;
