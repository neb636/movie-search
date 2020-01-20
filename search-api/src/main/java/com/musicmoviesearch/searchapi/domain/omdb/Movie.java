package com.musicmoviesearch.searchapi.domain.omdb;

import java.util.List;

public class Movie {
    final private String Title;
    final private String Year;
    final private String Rated;
    final private String Released;
    final private String Runtime;
    final private String Genre;
    final private String Director;
    final private String Writer;
    final private String Actors;
    final private String Plot;
    final private String Language;
    final private String Country;
    final private String Awards;
    final private String Poster;
    final private List<Rating> Ratings;
    final private String Metascore;
    final private String imdbRating;
    final private String imdbVotes;
    final private String imdbID;
    final private String Type;
    final private String DVD;
    final private String BoxOffice;
    final private String Production;
    final private String Website;

    public Movie(String Title, String Year, String Rated, String Released, String Runtime, String Genre, String Director, String Writer, String Actors, String Plot, String Language, String Country, String Awards, String Poster, List<Rating> Ratings, String Metascore, String imdbRating, String imdbVotes, String imdbID, String Type, String DVD, String BoxOffice, String Production, String Website) {
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
        this.DVD = DVD;
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

    public String getDVD() {
        return DVD;
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
