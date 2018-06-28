import * as React from 'react';
import './Home.css';
import SearchInput from './SearchInput/SearchInput';
import SearchList from '../SearchList/SearchList';

type Props = {};


class Home extends React.Component<Props, {}> {

    render() {

        return (
            <div className='Home'>
                <div className="Home__background">
                    <div className="Home__background-image" />
                    <div className="Home__background-blinder" />
                </div>

                <SearchInput/>

                <SearchList/>
            </div>
        );
    }
}

export default Home;
