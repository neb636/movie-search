import * as React from 'react';
import { observer, inject } from 'mobx-react';
import './SearchInput.css';
import { Store } from '../common/store';

type SearchInputProps = { store?: Store };


@inject("store")
@observer
class SearchInput extends React.Component<SearchInputProps, {}> {

    constructor(props: SearchInputProps) {
        super(props);
    }

    render() {
        const { store } = this.props;

        return (
            <div className="SearchInput">

                <input type="search"
                       className="SearchInput__input"
                       value={store.searchTerm}
                       onChange={(event: any) => store.setSearchTerm(event.target.value)}/>

                <button onClick={() => store.search()}
                        className="SearchInput__button">Search</button>
            </div>
        );
    }
}

export default SearchInput;
