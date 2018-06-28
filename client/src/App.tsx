import * as React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import './App.css';

type Props = {};

class App extends React.Component<Props, {}> {


    render() {

        return (
            <div className="App">
                <Header></Header>

                <BrowserRouter>
                    <Route exact path="/" component={Home} />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
