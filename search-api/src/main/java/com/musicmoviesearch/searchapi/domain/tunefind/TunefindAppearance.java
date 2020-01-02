package com.musicmoviesearch.searchapi.domain.tunefind;

public class TunefindAppearance {
    private Long song_id;
    private String song_name;
    private String song_album;
    private String artist_id;
    private String artist_name;
    private String date_created;
    private String scene;
    private String air_date;

    public TunefindAppearance(Long song_id, String song_name, String song_album, String artist_id, String artist_name, String date_created, String scene, String air_date) {
        this.song_id = song_id;
        this.song_name = song_name;
        this.song_album = song_album;
        this.artist_id = artist_id;
        this.artist_name = artist_name;
        this.date_created = date_created;
        this.scene = scene;
        this.air_date = air_date;
    }

    public Long getSong_id() {
        return song_id;
    }

    public void setSong_id(Long song_id) {
        this.song_id = song_id;
    }

    public String getSong_name() {
        return song_name;
    }

    public void setSong_name(String song_name) {
        this.song_name = song_name;
    }

    public String getSong_album() {
        return song_album;
    }

    public void setSong_album(String song_album) {
        this.song_album = song_album;
    }

    public String getArtist_id() {
        return artist_id;
    }

    public void setArtist_id(String artist_id) {
        this.artist_id = artist_id;
    }

    public String getArtist_name() {
        return artist_name;
    }

    public void setArtist_name(String artist_name) {
        this.artist_name = artist_name;
    }

    public String getDate_created() {
        return date_created;
    }

    public void setDate_created(String date_created) {
        this.date_created = date_created;
    }

    public String getScene() {
        return scene;
    }

    public void setScene(String scene) {
        this.scene = scene;
    }

    public String getAir_date() {
        return air_date;
    }

    public void setAir_date(String air_date) {
        this.air_date = air_date;
    }
}
