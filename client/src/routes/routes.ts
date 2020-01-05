import SearchPage from '@search-page/SearchPage';

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
  movieRecommendations: {
    path: '/movie-recommendations',
    component: SearchPage,
    getLink: () => '/movie-recommendations'
  }
};

export { Routes };
