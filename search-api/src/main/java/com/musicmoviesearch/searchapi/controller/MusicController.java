package com.musicmoviesearch.searchapi.controller;

import com.musicmoviesearch.searchapi.dto.spotify.SearchResultDto;
import com.musicmoviesearch.searchapi.service.SpotifyService;
import com.wrapper.spotify.model_objects.specification.AlbumSimplified;
import com.wrapper.spotify.model_objects.specification.Artist;
import com.wrapper.spotify.model_objects.specification.Track;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequestMapping("/v1/music")
@RestController
public class MusicController {

    @Autowired
    private SpotifyService spotifyService;

    @GetMapping(value = "/track/{spotify_track_id}")
    public Track getTrack(@PathVariable("spotify_track_id") @Valid String spotifyTrackId) {
        return spotifyService.getTrack(spotifyTrackId);
    }

    @GetMapping(value = "/artist/{spotify_artist_id}")
    public Artist getArtist(@PathVariable("spotify_artist_id") @Valid String spotifyArtistId) {
        return spotifyService.getArtist(spotifyArtistId);
    }

    @GetMapping(value = "/albums/{spotify_artist_id}")
    public List<AlbumSimplified> getArtistsAlbums(@PathVariable("spotify_artist_id") @Valid String spotifyArtistId) {
        return spotifyService.getArtistsAlbums(spotifyArtistId);
    }

    @GetMapping(value = "/search")
    public SearchResultDto getSong(@RequestParam("query") String query, @RequestParam("type") String type) {
        return spotifyService.searchQuery(query, type);
    }
}
