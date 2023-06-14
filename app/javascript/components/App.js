import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Greeting from './Greeting';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" component={Greeting} />
            </Routes>
        </Router>
    );
};

export default App;