package com.musicmoviesearch.searchapi.domain.tunefind;

import java.util.ArrayList;

public class TunefindSong {
    private Long id;
    private String name;
    private String album;
    private String tunefind_url;
    private String tunefind_api_url;
    private ArrayList<TunefindShow> shows;
    private ArrayList<TunefindEpisode> episodes;
    private ArrayList<TunefindMovie> movies;
    private TunefindAppearance appearance;

    public TunefindSong(Long id, String name, String album, String tunefind_url, String tunefind_api_url, ArrayList<TunefindShow> shows, ArrayList<TunefindEpisode> episodes, ArrayList<TunefindMovie> movies, TunefindAppearance appearance) {
        this.id = id;
        this.name = name;
        this.album = album;
        this.tunefind_url = tunefind_url;
        this.tunefind_api_url = tunefind_api_url;
        this.shows = shows;
        this.episodes = episodes;
        this.movies = movies;
        this.appearance = appearance;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAlbum() {
        return album;
    }

    public void setAlbum(String album) {
        this.album = album;
    }

    public String getTunefind_url() {
        return tunefind_url;
    }

    public void setTunefind_url(String tunefind_url) {
        this.tunefind_url = tunefind_url;
    }

    public String getTunefind_api_url() {
        return tunefind_api_url;
    }

    public void setTunefind_api_url(String tunefind_api_url) {
        this.tunefind_api_url = tunefind_api_url;
    }

    public ArrayList<TunefindShow> getShows() {
        return shows;
    }

    public void setShows(ArrayList<TunefindShow> shows) {
        this.shows = shows;
    }

    public ArrayList<TunefindEpisode> getEpisodes() {
        return episodes;
    }

    public void setEpisodes(ArrayList<TunefindEpisode> episodes) {
        this.episodes = episodes;
    }

    public ArrayList<TunefindMovie> getMovies() {
        return movies;
    }

    public void setMovies(ArrayList<TunefindMovie> movies) {
        this.movies = movies;
    }

    public TunefindAppearance getAppearance() {
        return appearance;
    }

    public void setAppearance(TunefindAppearance appearance) {
        this.appearance = appearance;
    }
}
