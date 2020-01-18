import * as React from 'react';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';
import Header from './common/components/Header/Header';
import './App.css';
import { Routes } from '@routes/routes';
import { graphQLClient } from 'graphql/graphql-client';
import { ApolloProvider } from '@apollo/react-hooks';

const App = () => {
  return (
    <div className="App">
      <ApolloProvider client={graphQLClient}>
        <BrowserRouter>
          <Header />

          <Switch>
            <Route exact={true} path={Routes.search.path} component={Routes.search.component} />
            <Route exact={true} path={Routes.track.path} component={Routes.track.component} />
            <Route exact={true} path={Routes.artist.path} component={Routes.artist.component} />

            <Redirect to={Routes.search.getLink()} />
          </Switch>
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
};

export default App;
