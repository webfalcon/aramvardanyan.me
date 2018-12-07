import React, { Component } from "react";
import Home from "./Home";
import About from "./About";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Skills from "./Skills";
import Contact from "./Contact";

class App extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/testimonials" component={Testimonials} />
            <Route path="/skills" component={Skills} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
