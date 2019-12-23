package com.musicmoviesearch.searchapi.service;

import com.musicmoviesearch.searchapi.exception.SearchRequestException;
import com.wrapper.spotify.SpotifyApi;
import com.wrapper.spotify.exceptions.SpotifyWebApiException;
import com.wrapper.spotify.model_objects.credentials.ClientCredentials;
import com.wrapper.spotify.model_objects.special.SearchResult;
import com.wrapper.spotify.requests.authorization.client_credentials.ClientCredentialsRequest;
import com.wrapper.spotify.requests.data.search.SearchItemRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class SpotifyService {

    private static SpotifyApi spotifyApi;

    public SpotifyService(@Value("${app.spotify-credentials.client-id}") String clientId,
                          @Value("${app.spotify-credentials.client-secret}") String clientSecret) {
        spotifyApi = new SpotifyApi.Builder()
                .setClientId(clientId)
                .setClientSecret(clientSecret)
                .build();

        setClientCredentials();
    }

    private static void setClientCredentials() {
        try {
            final ClientCredentialsRequest clientCredentialsRequest = spotifyApi.clientCredentials()
                    .build();
            final ClientCredentials clientCredentials = clientCredentialsRequest.execute();

            // Set access token for further "spotifyApi" object usage
            spotifyApi.setAccessToken(clientCredentials.getAccessToken());

            System.out.println("Expires in: " + clientCredentials.getExpiresIn());
        } catch (IOException | SpotifyWebApiException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    public SearchResult searchQuery(String query, String type) {
        final SearchItemRequest getSongRequest = spotifyApi.searchItem(query, type).build();

        try {
            return getSongRequest.execute();
        } catch (IOException | SpotifyWebApiException e) {
            throw new SearchRequestException(e.getMessage());
        }
    }
}
