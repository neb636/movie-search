import * as React from 'react';
import SearchList from './SearchList/SearchList';
import Header from './Header/Header';
import './App.css';

type Props = {};


class App extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props);
    }

    render() {

        return (
            <div className="App">
                <Header></Header>

                <SearchList></SearchList>
            </div>
        );
    }
}

export default App;
