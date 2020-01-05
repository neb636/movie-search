import SearchPage from '@search-page/SearchPage';
import TrackInfoPage from '@track-info-page/TrackInfoPage';

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
  }
};

export { Routes };
