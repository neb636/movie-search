package com.musicmoviesearch.searchapi.graphql;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.musicmoviesearch.searchapi.dto.spotify.AlbumDto;
import com.musicmoviesearch.searchapi.dto.spotify.PagingDto;
import com.musicmoviesearch.searchapi.dto.spotify.SearchResultDto;
import com.musicmoviesearch.searchapi.service.SpotifyService;
import com.wrapper.spotify.model_objects.specification.AlbumSimplified;
import com.wrapper.spotify.model_objects.specification.Artist;
import com.wrapper.spotify.model_objects.specification.Track;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class SpotifyQuery implements GraphQLQueryResolver {
    @Autowired
    private SpotifyService spotifyService;

    public Track getTrack(String id) {
        return spotifyService.getTrack(id);
    }

    public Artist getArtist(String id) {
        return spotifyService.getArtist(id);
    }

    public AlbumDto getAlbum(String id) { return spotifyService.getAlbum(id); }

    public PagingDto<AlbumSimplified> getArtistsAlbums(String id) {
        return spotifyService.getArtistsAlbums(id);
    }

    public SearchResultDto getSearchResults(String query, String type) {
        return spotifyService.searchQuery(query, type);
    }
}
