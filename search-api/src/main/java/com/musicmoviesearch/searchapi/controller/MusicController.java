package com.musicmoviesearch.searchapi.controller;

import com.musicmoviesearch.searchapi.service.SpotifyService;
import com.wrapper.spotify.model_objects.special.SearchResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/v1/music")
@RestController
public class MusicController {

    @Autowired
    private SpotifyService spotifyService;

    @GetMapping(value = "/search")
    public SearchResult getSong(@RequestParam("query") String query, @RequestParam("type") String type) {
        return spotifyService.searchQuery(query, type);
    }
}
