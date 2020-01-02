package com.musicmoviesearch.searchapi.domain.tunefind;

import java.util.ArrayList;
import java.util.Date;

public class TunefindMovie {
    private String id;
    private String name;
    private Date air_date;
    private Date date_updated;
    private String tunefind_url;
    private String tunefind_api_url;
    private ArrayList<TunefindSong> songs;
    private TunefindSong theme_song;
    private TunefindAppearance appearance;

    public TunefindMovie(String id, String name, Date air_date, Date date_updated, String tunefind_url, String tunefind_api_url, ArrayList<TunefindSong> songs, TunefindSong theme_song, TunefindAppearance appearance) {
        this.id = id;
        this.name = name;
        this.air_date = air_date;
        this.date_updated = date_updated;
        this.tunefind_url = tunefind_url;
        this.tunefind_api_url = tunefind_api_url;
        this.songs = songs;
        this.theme_song = theme_song;
        this.appearance = appearance;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getAir_date() {
        return air_date;
    }

    public void setAir_date(Date air_date) {
        this.air_date = air_date;
    }

    public Date getDate_updated() {
        return date_updated;
    }

    public void setDate_updated(Date date_updated) {
        this.date_updated = date_updated;
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

    public ArrayList<TunefindSong> getSongs() {
        return songs;
    }

    public void setSongs(ArrayList<TunefindSong> songs) {
        this.songs = songs;
    }

    public TunefindSong getTheme_song() {
        return theme_song;
    }

    public void setTheme_song(TunefindSong theme_song) {
        this.theme_song = theme_song;
    }

    public TunefindAppearance getAppearance() {
        return appearance;
    }

    public void setAppearance(TunefindAppearance appearance) {
        this.appearance = appearance;
    }
}
