import * as React from 'react';
import { observer, inject } from 'mobx-react';
import './SearchList.css';
import ArtistCard from './ArtistCard/ArtistCard'
import TrackCard from './TrackCard/TrackCard';
import { Store } from '../common/store';
import Spinner from '../common/components/Spinner/Spinner';

type Props = { store?: Store };


@inject('store')
@observer
class SearchList extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        const { store } = this.props;

        return (
            <div className='SearchList'>

                {store.isSearching &&
                    <Spinner></Spinner>
                }

                {!store.isSearching && store.searchResult.artists &&
                    <div className='SearchList__list-wrapper'>

                        <h3>Artists</h3>

                        {!store.searchResult.artists.length &&
                            <span>Unfortunately there are no artist results for {store.currentSearchedResult}</span>
                        }

                        {store.searchResult.artists.map((artist) =>
                            <ArtistCard artist={artist}></ArtistCard>
                        )}
                    </div>
                }

                {!store.isSearching && store.searchResult.tracks &&
                    <div className='SearchList__list-wrapper'>

                        <h3>Tracks</h3>

                        {!store.searchResult.tracks.length &&
                            <span>Unfortunately there are no track results for {store.currentSearchedResult}</span>
                        }

                        {store.searchResult.tracks.map((track) =>
                            <TrackCard track={track}></TrackCard>
                        )}
                    </div>
                }
            </div>
        );
    }
}

export default SearchList;
