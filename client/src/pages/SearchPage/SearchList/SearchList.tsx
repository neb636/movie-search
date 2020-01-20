import * as React from 'react';
import './SearchList.css';
import ArtistCard from './ArtistCard/ArtistCard';
import TrackCard from './TrackCard/TrackCard';
import Spinner from '@common/components/Spinner/Spinner';
import SearchListWrapper from '@pages/SearchPage/SearchList/SearchListWrapper/SearchListWrapper';
import { MusicSearchResults } from '@common/mappers/search-mapper';
import AlbumCard from '@pages/SearchPage/SearchList/AlbumCard/AlbumCard';

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
          <SearchListWrapper
            className="SearchList__tracks-wrapper"
            title="Songs"
            hasResults={!!searchResults.tracks.length}
            noResultsMessage={songsNoResultsMessage}
          >
            {searchResults.tracks && searchResults.tracks.map(track => <TrackCard key={track.id} track={track} />)}
          </SearchListWrapper>
        )}

        {!loading && searchResults?.artists && (
          <SearchListWrapper
            className="SearchList__artists-wrapper"
            title="Artists"
            hasResults={!!searchResults.artists?.length}
            noResultsMessage={artistsNoResultsMessage}
          >
            {searchResults.artists.map(artist => (
              <ArtistCard artist={artist} key={artist.id} />
            ))}
          </SearchListWrapper>
        )}

        {!loading && searchResults?.albums && (
          <SearchListWrapper
            className="SearchList__albums-wrapper"
            title="Albums"
            hasResults={!!searchResults.albums?.length}
            noResultsMessage={artistsNoResultsMessage}
          >
            {searchResults.albums.map(album => (
              <AlbumCard album={album} key={album.id} />
            ))}
          </SearchListWrapper>
        )}
      </div>
    );
  }

  return null;
};

export default SearchList;
