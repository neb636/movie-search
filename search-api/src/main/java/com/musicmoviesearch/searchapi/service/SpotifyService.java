package com.musicmoviesearch.searchapi.service;

import com.musicmoviesearch.searchapi.exception.SearchRequestException;
import com.wrapper.spotify.SpotifyApi;
import com.wrapper.spotify.exceptions.SpotifyWebApiException;
import com.wrapper.spotify.model_objects.credentials.ClientCredentials;
import com.wrapper.spotify.model_objects.special.SearchResult;
import com.wrapper.spotify.model_objects.specification.Track;
import com.wrapper.spotify.requests.authorization.client_credentials.ClientCredentialsRequest;
import com.wrapper.spotify.requests.data.search.SearchItemRequest;
import com.wrapper.spotify.requests.data.tracks.GetTrackRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class SpotifyService {
    final private String clientId;
    final private String clientSecret;

    public SpotifyService(@Value("${app.spotify-credentials.client-id}") String clientId,
                          @Value("${app.spotify-credentials.client-secret}") String clientSecret) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
    }

    public SearchResult searchQuery(String query, String type) {
        final SpotifyApi spotifyApi = getSpotifyClient();
        final SearchItemRequest getSearchResultsRequest = spotifyApi.searchItem(query, type).build();

        try {
            return getSearchResultsRequest.execute();
        } catch (IOException | SpotifyWebApiException e) {
            throw new SearchRequestException(e.getMessage());
        }
    }

    public Track getTrack(String trackId) {
        final SpotifyApi spotifyApi = getSpotifyClient();
        final GetTrackRequest getTrackRequest = spotifyApi.getTrack(trackId).build();

        try {
            return getTrackRequest.execute();
        } catch (IOException | SpotifyWebApiException e) {
            throw new SearchRequestException(e.getMessage());
        }
    }

    private SpotifyApi getSpotifyClient() {
        final SpotifyApi spotifyApi = new SpotifyApi.Builder()
                .setClientId(clientId)
                .setClientSecret(clientSecret)
                .build();
        try {
            final ClientCredentialsRequest clientCredentialsRequest = spotifyApi.clientCredentials()
                    .build();
            final ClientCredentials clientCredentials = clientCredentialsRequest.execute();

            spotifyApi.setAccessToken(clientCredentials.getAccessToken());

            return spotifyApi;
        } catch (IOException | SpotifyWebApiException e) {
            throw new SearchRequestException(e.getMessage());
        }
    }
}
