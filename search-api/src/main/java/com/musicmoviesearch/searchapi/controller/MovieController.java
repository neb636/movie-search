package com.musicmoviesearch.searchapi.controller;

import com.musicmoviesearch.searchapi.domain.tunefind.TunefindSong;
import com.musicmoviesearch.searchapi.service.TunefindService;
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
    private TunefindService tunefindService;

    @GetMapping(value = "/{spotify_track_id}")
    public TunefindSong getMovieListBySpotifyTrackId(@PathVariable("spotify_track_id") @Valid String spotifyTrackId) {
        return tunefindService.getSong(spotifyTrackId);
    }
}
