package com.musicmoviesearch.searchapi.controller;

import com.musicmoviesearch.searchapi.domain.TunefindSong;
import com.musicmoviesearch.searchapi.service.SpotifyService;
import com.musicmoviesearch.searchapi.service.TunefindService;
import com.wrapper.spotify.model_objects.special.SearchResult;
import com.wrapper.spotify.model_objects.specification.Track;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RequestMapping("/v1/search")
@RestController
public class SearchController {

    @Autowired
    private SpotifyService spotifyService;

    @Autowired
    private TunefindService tunefindService;

    @GetMapping(value = "/music")
    public SearchResult getSong(@RequestParam("query") String query, @RequestParam("type") String type) {
        return spotifyService.searchQuery(query, type);
    }

    @GetMapping(value = "/track/{track_id}")
    public Track getTrack(@PathVariable("track_id") @Valid String trackId) {
        return spotifyService.getTrack(trackId);
    }

    @GetMapping(value = "/movie-recommendations/{track_id}")
    public TunefindSong getMovieRecommendations(@PathVariable("track_id") @Valid String trackId) {
        return tunefindService.getSong(trackId);
    }
}
