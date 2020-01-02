package com.musicmoviesearch.searchapi.domain.tunefind;

public class TunefindShow {
    private String id;
    private String name;
    private String date_updated;
    private String tunefind_url;
    private String tunefind_api_url;
    private TunefindAppearance appearance;

    public TunefindShow(String id, String name, String date_updated, String tunefind_url, String tunefind_api_url, TunefindAppearance appearance) {
        this.id = id;
        this.name = name;
        this.date_updated = date_updated;
        this.tunefind_url = tunefind_url;
        this.tunefind_api_url = tunefind_api_url;
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

    public String getDate_updated() {
        return date_updated;
    }

    public void setDate_updated(String date_updated) {
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

    public TunefindAppearance getAppearance() {
        return appearance;
    }

    public void setAppearance(TunefindAppearance appearance) {
        this.appearance = appearance;
    }
}
