import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Message from './Message';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Message} />
            </Switch>
        </Router>
    );
};

export default App;