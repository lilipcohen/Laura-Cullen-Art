import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Press from './pages/Press';
import Nav from './components/Nav';
import Footer from './components/Footer/Footer';
import HamburgerNav from './components/HamburgerNav';

function App() {
  
  return (
    <div>
      <Router>
        <Wrapper>
          <Nav />
          <HamburgerNav />
          <Route exact path={['/', '/home']} component={Home} />
          <Route path="/about" component={About} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/press" component={Press} />
        </Wrapper>
      </Router>
      <Footer />
    </div>
  )
}

export default App;
