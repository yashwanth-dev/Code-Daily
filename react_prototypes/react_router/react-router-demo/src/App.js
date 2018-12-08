import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import Home from './Home/Home';
import About from './About/About';
import Services from './Services/Services';
import SoftwareDivision from './SoftwareDivision/SoftwareDivision';
import Contact from './Contact/Contact';
import Products from './Products/Products';

class App extends Component {
  render() {
    return (

      <div className="App">

        <header>
          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about/">About</Link>
                  </li>
                  <li>
                    <Link to="/services/">Services</Link>
                  </li>
                  <li>
                    <Link to="/products/">Products</Link>
                  </li>
                  <li>
                    <Link to="/softwaredivision/">Software Division</Link>
                  </li>
                  <li>
                    <Link to="/contact/">Contact</Link>
                  </li>
                </ul>
              </nav>

              <Route path="/" exact component={Home} />
              <Route path="/about/" component={About} />
              <Route path="/services/" component={Services} />
              <Route path="/products/" exact component={Products} />
              <Route path="/softwaredivision/" component={SoftwareDivision} />
              <Route path="/contact/" component={Contact} />
            </div>
          </Router>
        </header>
      </div>

    );
  }
}

export default App;
