package com.musicmoviesearch.searchapi.dto.spotify;

import com.wrapper.spotify.model_objects.specification.*;

import java.io.Serializable;

public class SearchResultDto implements Serializable {
    private PagingDto<AlbumSimplified> albums;
    private PagingDto<Artist> artists;
    private PagingDto<PlaylistSimplified> playlists;
    private PagingDto<Track> tracks;

    public PagingDto<AlbumSimplified> getAlbums() {
        return albums;
    }

    public void setAlbums(PagingDto<AlbumSimplified> albums) {
        this.albums = albums;
    }

    public PagingDto<Artist> getArtists() {
        return artists;
    }

    public void setArtists(PagingDto<Artist> artists) {
        this.artists = artists;
    }

    public PagingDto<PlaylistSimplified> getPlaylists() {
        return playlists;
    }

    public void setPlaylists(PagingDto<PlaylistSimplified> playlists) {
        this.playlists = playlists;
    }

    public PagingDto<Track> getTracks() {
        return tracks;
    }

    public void setTracks(PagingDto<Track> tracks) {
        this.tracks = tracks;
    }
}
