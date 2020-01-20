package com.musicmoviesearch.searchapi.domain.omdb;

public class Rating {
    final private String Source;
    final private String Value;

    public Rating(String source, String value) {
        Source = source;
        Value = value;
    }

    public String getSource() {
        return Source;
    }

    public String getValue() {
        return Value;
    }
}
