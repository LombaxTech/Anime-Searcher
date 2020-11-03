import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import AnimePage from "./AnimePage";
import Navbar from "./Navbar";

export default function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/anime/:animeId" exact component={AnimePage} />
            </Switch>
        </Router>
    );
}
