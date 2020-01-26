import React from 'react';

import Home from './Home';
import Contact from './Contact';
import CartProject from './CartProject';
import { Route } from "react-router-dom";
const BodyContent = () => {
    return (<div className="bodyContent">
        <Route exact path="/" component={Home} />
        <Route exact path="/cartProject" component={CartProject} />
        <Route path="/contact" component={Contact} />
    </div>)
}

export default BodyContent;