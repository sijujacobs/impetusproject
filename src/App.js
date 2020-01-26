import React from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact';
import Project from './components/Project';

import './css/style.css';
class App extends React.Component {
  render() {
    return (
		<HashRouter>
        <div>
          <ul className="navMenu">
            <li><NavLink exact to="/">Homes</NavLink></li>
            <li><NavLink exact to="/project">Project</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route exact path="/project" component={Project}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
