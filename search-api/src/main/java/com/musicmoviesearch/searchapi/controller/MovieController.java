package com.musicmoviesearch.searchapi.controller;

import com.musicmoviesearch.searchapi.domain.omdb.Movie;
import com.musicmoviesearch.searchapi.service.OMDBService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RequestMapping("/v1/movie")
@RestController
public class MovieController {

    @Autowired
    private OMDBService OMDBService;

    @GetMapping(value = "/title/{title}")
    public Movie getMovieByTitle(@PathVariable("title") @Valid String title) {
        return OMDBService.getMovieByTitle(title);
    }
}
