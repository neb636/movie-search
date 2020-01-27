package com.musicmoviesearch.searchapi.service;

import com.musicmoviesearch.searchapi.domain.omdb.Movie;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;

@Service
public class OMDBService {
    private final String apiKey;
    private final RestTemplate restTemplate;

    public OMDBService(RestTemplateBuilder restTemplateBuilder,
                       @Value("${app.omdb-credentials.api-endpoint}") String apiEndpoint,
                       @Value("${app.omdb-credentials.api-key}") String apiKey) {
        this.restTemplate = restTemplateBuilder
                .rootUri(apiEndpoint)
                .build();

        this.apiKey = apiKey;
    }

    public Movie getMovieByTitle(String title) throws IOException {
        Movie movie = restTemplate.getForObject(this.getQueryString() + "&t=" + title, Movie.class);

        if (movie != null && movie.getTitle() != null) {
            return movie;
        }

        throw new IOException("Movie does not exist");
    }

    private String getQueryString() {
        return "/?apikey=" + this.apiKey;
    }
}
