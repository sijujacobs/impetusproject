import React from 'react';
import { HashRouter } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import BodyContent from './components/BodyContent';

import './css/style.css';
class App extends React.Component {
  render() {
    return (
		<HashRouter>
			<div className="appContainer">
				<Header />
				<BodyContent />
				<Footer/>
			</div>
      </HashRouter>
    );
  }
}

export default App;
