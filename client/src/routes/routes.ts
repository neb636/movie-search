import SearchPage from '@pages/SearchPage/SearchPage';
import TrackInfoPage from '@pages/TrackInfoPage/TrackInfoPage';
import ArtistInfoPage from '@pages/ArtistInfoPage/ArtistInfoPage';

const searchQueryParams = {
  searchTerm: 'searchTerm'
};

const Routes = {
  search: {
    path: '/search',
    component: SearchPage,
    getLink: () => `/search`,
    queryParams: searchQueryParams
  },
  track: {
    path: '/track/:spotifyTrackId',
    component: TrackInfoPage,
    getLink: (spotifyTrackId: string) => `/track/${spotifyTrackId}`
  },
  artist: {
    path: '/artist/:spotifyArtistId',
    component: ArtistInfoPage,
    getLink: (spotifyArtistId: string) => `/artist/${spotifyArtistId}`
  }
};

export { Routes };
