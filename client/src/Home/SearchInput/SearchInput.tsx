import * as React from 'react';
import { observer, inject } from 'mobx-react';
import './SearchInput.css';
import { Store } from '../../common/store';

type SearchInputProps = { store?: Store };


@inject("store")
@observer
class SearchInput extends React.Component<SearchInputProps, {}> {

    handleSubmit(event: any): void {
        event.preventDefault();
        this.props.store.search();
    }

    render() {
        const { store } = this.props;

        return (
            <form onSubmit={(event: any) => this.handleSubmit(event)}
                  className="SearchInput">

                <input type="search"
                       className="SearchInput__input"
                       value={store.searchTerm}
                       onChange={(event: any) => store.setSearchTerm(event.target.value)}/>

                <button className="SearchInput__button">Search</button>
            </form>
        );
    }
}

export default SearchInput;
