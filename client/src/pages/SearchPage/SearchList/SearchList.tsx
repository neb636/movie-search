import * as React from 'react';
import './SearchList.css';
import ArtistCard from './ArtistCard/ArtistCard';
import TrackCard from './TrackCard/TrackCard';
import Spinner from '@common/components/Spinner/Spinner';
import SearchListWrapper from '@pages/SearchPage/SearchList/SearchListWrapper/SearchListWrapper';
import { MusicSearchResults } from '@common/mappers/search-mapper';

type Props = {
  loading: boolean;
  searchResults: MusicSearchResults | undefined;
  currentSearchedTerm: string;
};

const SearchList = (props: Props) => {
  const { loading, searchResults, currentSearchedTerm } = props;
  const songsNoResultsMessage = `Unfortunately there are no track results for ${currentSearchedTerm}`;
  const artistsNoResultsMessage = `Unfortunately there are no artist results for {currentSearchedTerm}`;

  if (currentSearchedTerm) {
    return (
      <div className="SearchList">
        {loading && <Spinner className="SearchList__spinner" />}

        {!loading && searchResults?.tracks && (
          <SearchListWrapper title="Songs" hasResults={!!searchResults.tracks.length} noResultsMessage={songsNoResultsMessage}>
            {searchResults.tracks.map(track => (
              <TrackCard track={track} key={track.id} />
            ))}
          </SearchListWrapper>
        )}

        {!loading && searchResults?.artists && (
          <SearchListWrapper title="Artists" hasResults={!!searchResults.artists?.length} noResultsMessage={artistsNoResultsMessage}>
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
