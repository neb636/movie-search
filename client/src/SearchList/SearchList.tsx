import * as React from 'react';
import './SearchList.css';
import ArtistCard from './ArtistCard/ArtistCard'
import TrackCard from './TrackCard/TrackCard';
import Spinner from '../common/components/Spinner/Spinner';
import {useSelector} from "react-redux";
import {StoreState} from "../state/store-interfaces";

const SearchList = () => {
    const isSearching = useSelector((state: StoreState) => state.music.isSearching);
    const currentSearchedTerm = useSelector((state: StoreState) => state.music.currentSearchedTerm);
    const searchResults = useSelector((state: StoreState) => state.music.searchResults);

    if (currentSearchedTerm) {

        return (
            <div className='SearchList'>

                { isSearching && <Spinner /> }

                {!isSearching && searchResults.artists &&
                    <div className='SearchList__list-wrapper'>

                        <h3 className="SearchList__section-title">Artists</h3>

                        {!searchResults.artists.length &&
                        <span>Unfortunately there are no artist results for {currentSearchedTerm}</span>
                        }

                        <div className='SearchList__list-list-wrapper'>

                            {searchResults.artists.map((artist) =>
                                <ArtistCard artist={artist} />
                            )}
                        </div>
                    </div>
                }

                {!isSearching && searchResults.tracks &&
                    <div className='SearchList__list-wrapper'>

                        <h3>Tracks</h3>

                        {!searchResults.tracks.length &&
                            <span>Unfortunately there are no track results for {currentSearchedTerm}</span>
                        }

                        <div className='SearchList__list-list-wrapper'>
                            {searchResults.tracks.map((track) =>
                                <TrackCard track={track} key={track.id} />
                            )}
                        </div>
                    </div>
                }
            </div>
        );
    }

    return null;
};

export default SearchList;
