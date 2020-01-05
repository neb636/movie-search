import * as React from 'react';
import './SearchList.css';
import ArtistCard from './ArtistCard/ArtistCard';
import TrackCard from './TrackCard/TrackCard';
import Spinner from '@common/components/Spinner/Spinner';
import { useSelector } from 'react-redux';
import { StoreState } from '@state/store-interfaces';
import SearchListWrapper from '@search-page/SearchList/SearchListWrapper/SearchListWrapper';

const SearchList = () => {
  const isSearching = useSelector((state: StoreState) => state.music.isSearching);
  const currentSearchedTerm = useSelector((state: StoreState) => state.music.currentSearchedTerm);
  const searchResults = useSelector((state: StoreState) => state.music.searchResults);
  const songsNoResultsMessage = `Unfortunately there are no track results for ${currentSearchedTerm}`;
  const artistsNoResultsMessage = `Unfortunately there are no artist results for {currentSearchedTerm}`;

  if (currentSearchedTerm) {
    return (
      <div className="SearchList">
        {isSearching && <Spinner className="SearchList__spinner" />}

        {!isSearching && searchResults.tracks && (
          <SearchListWrapper title="Songs" hasResults={!!searchResults.tracks.length} noResultsMessage={songsNoResultsMessage}>
            {searchResults.tracks.map(track => (
              <TrackCard track={track} key={track.id} />
            ))}
          </SearchListWrapper>
        )}

        {!isSearching && searchResults.artists && (
          <SearchListWrapper title="Artists" hasResults={!!searchResults.artists.length} noResultsMessage={artistsNoResultsMessage}>
            {searchResults.artists.map(artist => (
              <ArtistCard artist={artist} key={artist.id} />
            ))}
          </SearchListWrapper>
        )}
      </div>
    );
  }

  return null;
};

export default SearchList;
