import * as React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import './App.css';

const App = () => {

    return (
        <div className="App">
            <Header />

            <BrowserRouter>
                <Route exact path="/" component={Home} />
            </BrowserRouter>
        </div>
    );
};

export default App;
