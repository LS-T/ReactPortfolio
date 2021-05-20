import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer"


function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/contact" component={Contact}/>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;