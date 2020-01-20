package com.musicmoviesearch.searchapi.dto.spotify;

import com.neovisionaries.i18n.CountryCode;
import com.wrapper.spotify.enums.AlbumType;
import com.wrapper.spotify.enums.ModelObjectType;
import com.wrapper.spotify.enums.ReleaseDatePrecision;
import com.wrapper.spotify.model_objects.specification.*;

import java.io.Serializable;

public class AlbumDto implements Serializable {
    private AlbumType albumType;
    private ArtistSimplified[] artists;
    private CountryCode[] availableMarkets;
    private Copyright[] copyrights;
    private ExternalId externalIds;
    private ExternalUrl externalUrls;
    private String[] genres;
    private String href;
    private String id;
    private Image[] images;
    private String label;
    private String name;
    private Integer popularity;
    private String releaseDate;
    private ReleaseDatePrecision releaseDatePrecision;
    private PagingDto<TrackSimplified> tracks;
    private ModelObjectType type;
    private String uri;

    public AlbumType getAlbumType() {
        return albumType;
    }

    public void setAlbumType(AlbumType albumType) {
        this.albumType = albumType;
    }

    public ArtistSimplified[] getArtists() {
        return artists;
    }

    public void setArtists(ArtistSimplified[] artists) {
        this.artists = artists;
    }

    public CountryCode[] getAvailableMarkets() {
        return availableMarkets;
    }

    public void setAvailableMarkets(CountryCode[] availableMarkets) {
        this.availableMarkets = availableMarkets;
    }

    public Copyright[] getCopyrights() {
        return copyrights;
    }

    public void setCopyrights(Copyright[] copyrights) {
        this.copyrights = copyrights;
    }

    public ExternalId getExternalIds() {
        return externalIds;
    }

    public void setExternalIds(ExternalId externalIds) {
        this.externalIds = externalIds;
    }

    public ExternalUrl getExternalUrls() {
        return externalUrls;
    }

    public void setExternalUrls(ExternalUrl externalUrls) {
        this.externalUrls = externalUrls;
    }

    public String[] getGenres() {
        return genres;
    }

    public void setGenres(String[] genres) {
        this.genres = genres;
    }

    public String getHref() {
        return href;
    }

    public void setHref(String href) {
        this.href = href;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Image[] getImages() {
        return images;
    }

    public void setImages(Image[] images) {
        this.images = images;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getPopularity() {
        return popularity;
    }

    public void setPopularity(Integer popularity) {
        this.popularity = popularity;
    }

    public String getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(String releaseDate) {
        this.releaseDate = releaseDate;
    }

    public ReleaseDatePrecision getReleaseDatePrecision() {
        return releaseDatePrecision;
    }

    public void setReleaseDatePrecision(ReleaseDatePrecision releaseDatePrecision) {
        this.releaseDatePrecision = releaseDatePrecision;
    }

    public PagingDto<TrackSimplified> getTracks() {
        return tracks;
    }

    public void setTracks(PagingDto<TrackSimplified> tracks) {
        this.tracks = tracks;
    }

    public ModelObjectType getType() {
        return type;
    }

    public void setType(ModelObjectType type) {
        this.type = type;
    }

    public String getUri() {
        return uri;
    }

    public void setUri(String uri) {
        this.uri = uri;
    }
}
