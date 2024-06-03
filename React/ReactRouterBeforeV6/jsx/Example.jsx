import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from './Home.jsx'
import About from './About.jsx'
import Third from './Third.jsx'
import Topics from './Topics.jsx'
import PageNotFound from './PageNotFound.jsx'

function BasicExample() {
    return (
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/third">Third</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics</Link>
                    </li>
                </ul>

                <hr />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/third" render={ props => <Third {...props} user={123} />} />
                    <Route path="/topics" component={Topics} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}





export default BasicExample;
