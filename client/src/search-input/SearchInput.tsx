import * as React from 'react';
import { observer, inject } from 'mobx-react';
import './SearchInput.css';
import { Store } from '../common/store';

interface Props {
    store: Store;
}


@inject("Store")
@observer
class SearchInput extends React.Component<Props, any> {

    handleChange = (event: any) => {
        this.props.store.setSearchTerm(event.target.value);
    };

    render() {
        const { store } = this.props;
        return (
            <div className="SearchInput">

                <input type="search"
                       className="SearchInput__input"
                       value={store.searchTerm}
                       onChange={this.handleChange}/>

                <button className="SearchInput__button">Search</button>
            </div>
        );
    }
}

export default SearchInput;
