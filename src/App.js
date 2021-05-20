import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import About from "./pages/About"


function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;