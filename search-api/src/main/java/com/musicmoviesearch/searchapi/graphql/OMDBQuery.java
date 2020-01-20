package com.musicmoviesearch.searchapi.graphql;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.musicmoviesearch.searchapi.domain.omdb.Movie;
import com.musicmoviesearch.searchapi.service.OMDBService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class OMDBQuery implements GraphQLQueryResolver {
    @Autowired
    private OMDBService omdbService;

    public Movie getMovie(String title) {
        return omdbService.getMovieByTitle(title);
    }
}
