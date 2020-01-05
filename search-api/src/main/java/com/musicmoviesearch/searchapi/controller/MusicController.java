package com.musicmoviesearch.searchapi.controller;

import com.musicmoviesearch.searchapi.service.SpotifyService;
import com.wrapper.spotify.model_objects.special.SearchResult;
import com.wrapper.spotify.model_objects.specification.Track;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RequestMapping("/v1/music")
@RestController
public class MusicController {

    @Autowired
    private SpotifyService spotifyService;

    @GetMapping(value = "/track/{spotify_track_id}")
    public Track getTrack(@PathVariable("spotify_track_id") @Valid String spotifyTrackId) {
        return spotifyService.getTrack(spotifyTrackId);
    }

    @GetMapping(value = "/search")
    public SearchResult getSong(@RequestParam("query") String query, @RequestParam("type") String type) {
        return spotifyService.searchQuery(query, type);
    }
}
