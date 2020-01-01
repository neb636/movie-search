import * as React from 'react';
import './SearchList.css';
import ArtistCard from './ArtistCard/ArtistCard'
import TrackCard from './TrackCard/TrackCard';
import Spinner from '../common/components/Spinner/Spinner';
import {SongList} from "../common/interfaces/interfaces";

type Props = {
    searchResult: SongList;
    isSearching: boolean;
    currentSearchedTerm: string;
};

const SearchList = (props: Props) => {
    const { searchResult, isSearching, currentSearchedTerm } = props;

    if (currentSearchedTerm) {

        return (
            <div className='SearchList'>

                { isSearching && <Spinner /> }

                {!isSearching && searchResult.artists &&
                    <div className='SearchList__list-wrapper'>

                        <h3 className="SearchList__section-title">Artists</h3>

                        {!searchResult.artists.length &&
                        <span>Unfortunately there are no artist results for {currentSearchedTerm}</span>
                        }

                        <div className='SearchList__list-list-wrapper'>

                            {searchResult.artists.map((artist) =>
                                <ArtistCard artist={artist} />
                            )}
                        </div>
                    </div>
                }

                {!isSearching && searchResult.tracks &&
                    <div className='SearchList__list-wrapper'>

                        <h3>Tracks</h3>

                        {!searchResult.tracks.length &&
                            <span>Unfortunately there are no track results for {currentSearchedTerm}</span>
                        }

                        <div className='SearchList__list-list-wrapper'>
                            {searchResult.tracks.map((track) =>
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
