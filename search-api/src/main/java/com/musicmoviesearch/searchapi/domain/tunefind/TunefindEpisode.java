package com.musicmoviesearch.searchapi.domain.tunefind;

public class TunefindEpisode {
    private Long id;
    private String name;
    private String tunefind_url;
    private String tunefind_api_url;
    private String date_updated;
    private String air_date;
    private String show_name;
    private String show_id;
    private String season_name;
    private Long season_number;
    private Long episode_number;
    private TunefindAppearance appearance;

    public TunefindEpisode(Long id, String name, String tunefind_url, String tunefind_api_url, String date_updated, String air_date, String show_name, String show_id, String season_name, Long season_number, Long episode_number, TunefindAppearance appearance) {
        this.id = id;
        this.name = name;
        this.tunefind_url = tunefind_url;
        this.tunefind_api_url = tunefind_api_url;
        this.date_updated = date_updated;
        this.air_date = air_date;
        this.show_name = show_name;
        this.show_id = show_id;
        this.season_name = season_name;
        this.season_number = season_number;
        this.episode_number = episode_number;
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

    public String getDate_updated() {
        return date_updated;
    }

    public void setDate_updated(String date_updated) {
        this.date_updated = date_updated;
    }

    public String getAir_date() {
        return air_date;
    }

    public void setAir_date(String air_date) {
        this.air_date = air_date;
    }

    public String getShow_name() {
        return show_name;
    }

    public void setShow_name(String show_name) {
        this.show_name = show_name;
    }

    public String getShow_id() {
        return show_id;
    }

    public void setShow_id(String show_id) {
        this.show_id = show_id;
    }

    public String getSeason_name() {
        return season_name;
    }

    public void setSeason_name(String season_name) {
        this.season_name = season_name;
    }

    public Long getSeason_number() {
        return season_number;
    }

    public void setSeason_number(Long season_number) {
        this.season_number = season_number;
    }

    public Long getEpisode_number() {
        return episode_number;
    }

    public void setEpisode_number(Long episode_number) {
        this.episode_number = episode_number;
    }

    public TunefindAppearance getAppearance() {
        return appearance;
    }

    public void setAppearance(TunefindAppearance appearance) {
        this.appearance = appearance;
    }
}
