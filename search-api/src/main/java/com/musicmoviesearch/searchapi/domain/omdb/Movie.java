package com.musicmoviesearch.searchapi.domain.omdb;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class Movie {
    @JsonProperty("title")
    final private String Title;
    @JsonProperty("year")
    final private String Year;
    @JsonProperty("rated")
    final private String Rated;
    @JsonProperty("released")
    final private String Released;
    @JsonProperty("runtime")
    final private String Runtime;
    @JsonProperty("genre")
    final private String Genre;
    @JsonProperty("director")
    final private String Director;
    @JsonProperty("writer")
    final private String Writer;
    @JsonProperty("actors")
    final private String Actors;
    @JsonProperty("plot")
    final private String Plot;
    @JsonProperty("language")
    final private String Language;
    @JsonProperty("country")
    final private String Country;
    @JsonProperty("awards")
    final private String Awards;
    @JsonProperty("poster")
    final private String Poster;
    @JsonProperty("ratings")
    final private List<Rating> Ratings;
    @JsonProperty("metascore")
    final private String Metascore;
    final private String imdbRating;
    final private String imdbVotes;
    final private String imdbID;
    @JsonProperty("type")
    final private String Type;
    @JsonProperty("boxOffice")
    final private String BoxOffice;
    @JsonProperty("production")
    final private String Production;
    @JsonProperty("website")
    final private String Website;

    public Movie(String Title, String Year, String Rated, String Released, String Runtime, String Genre, String Director, String Writer, String Actors, String Plot, String Language, String Country, String Awards, String Poster, List<Rating> Ratings, String Metascore, String imdbRating, String imdbVotes, String imdbID, String Type, String BoxOffice, String Production, String Website) {
        this.Title = Title;
        this.Year = Year;
        this.Rated = Rated;
        this.Released = Released;
        this.Runtime = Runtime;
        this.Genre = Genre;
        this.Director = Director;
        this.Writer = Writer;
        this.Actors = Actors;
        this.Plot = Plot;
        this.Language = Language;
        this.Country = Country;
        this.Awards = Awards;
        this.Poster = Poster;
        this.Ratings = Ratings;
        this.Metascore = Metascore;
        this.imdbRating = imdbRating;
        this.imdbVotes = imdbVotes;
        this.imdbID = imdbID;
        this.Type = Type;
        this.BoxOffice = BoxOffice;
        this.Production = Production;
        this.Website = Website;
    }

    public String getTitle() {
        return Title;
    }

    public String getYear() {
        return Year;
    }

    public String getRated() {
        return Rated;
    }

    public String getReleased() {
        return Released;
    }

    public String getRuntime() {
        return Runtime;
    }

    public String getGenre() {
        return Genre;
    }

    public String getDirector() {
        return Director;
    }

    public String getWriter() {
        return Writer;
    }

    public String getActors() {
        return Actors;
    }

    public String getPlot() {
        return Plot;
    }

    public String getLanguage() {
        return Language;
    }

    public String getCountry() {
        return Country;
    }

    public String getAwards() {
        return Awards;
    }

    public String getPoster() {
        return Poster;
    }

    public List<Rating> getRatings() {
        return Ratings;
    }

    public String getMetascore() {
        return Metascore;
    }

    public String getImdbRating() {
        return imdbRating;
    }

    public String getImdbVotes() {
        return imdbVotes;
    }

    public String getImdbID() {
        return imdbID;
    }

    public String getType() {
        return Type;
    }

    public String getBoxOffice() {
        return BoxOffice;
    }

    public String getProduction() {
        return Production;
    }

    public String getWebsite() {
        return Website;
    }
}
