import * as React from 'react';
import {Route, Redirect, Switch, BrowserRouter} from 'react-router-dom';
import Header from './common/components/Header/Header';
import './App.css';
import store from '@state/store';
import {Provider} from 'react-redux';
import {Routes} from '@routes/routes';

const App = () => {

    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <Header />

                    <Switch>
                        <Route exact={true} path={Routes.search.path} component={Routes.search.component} />

                        <Redirect exact={true} from="/" to={Routes.search.getLink()} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        </div>
    );
};

export default App;
