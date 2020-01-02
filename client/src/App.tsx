import * as React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import './App.css';
import store from "./state/store";
import {Provider} from "react-redux";

const App = () => {

    return (
        <div className="App">
            <Provider store={store}>
                <Header />

                <BrowserRouter>
                    <Route exact path="/" component={Home} />
                </BrowserRouter>
            </Provider>
        </div>
    );
};

export default App;
