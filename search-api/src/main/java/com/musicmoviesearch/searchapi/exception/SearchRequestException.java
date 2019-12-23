package com.musicmoviesearch.searchapi.exception;

public class SearchRequestException extends RuntimeException {
    public SearchRequestException(String message) {
        super(message);
    }
}
