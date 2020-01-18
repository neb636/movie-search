package com.musicmoviesearch.searchapi.service;

import com.musicmoviesearch.searchapi.dto.spotify.PagingDto;
import com.musicmoviesearch.searchapi.dto.spotify.SearchResultDto;
import com.musicmoviesearch.searchapi.exception.SearchRequestException;
import com.wrapper.spotify.SpotifyApi;
import com.wrapper.spotify.exceptions.SpotifyWebApiException;
import com.wrapper.spotify.model_objects.credentials.ClientCredentials;
import com.wrapper.spotify.model_objects.special.SearchResult;
import com.wrapper.spotify.model_objects.specification.AlbumSimplified;
import com.wrapper.spotify.model_objects.specification.Artist;
import com.wrapper.spotify.model_objects.specification.Paging;
import com.wrapper.spotify.model_objects.specification.Track;
import com.wrapper.spotify.requests.authorization.client_credentials.ClientCredentialsRequest;
import com.wrapper.spotify.requests.data.artists.GetArtistRequest;
import com.wrapper.spotify.requests.data.artists.GetArtistsAlbumsRequest;
import com.wrapper.spotify.requests.data.search.SearchItemRequest;
import com.wrapper.spotify.requests.data.tracks.GetTrackRequest;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class SpotifyService {
    final private String clientId;
    final private String clientSecret;
    final private ModelMapper modelMapper = new ModelMapper();

    @Autowired
    public SpotifyService(@Value("${app.spotify-credentials.client-id}") String clientId,
                          @Value("${app.spotify-credentials.client-secret}") String clientSecret) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
    }

    public SearchResultDto searchQuery(String query, String type) {
        final SpotifyApi spotifyApi = getSpotifyClient();
        final SearchItemRequest getSearchResultsRequest = spotifyApi.searchItem(query, type).build();

        try {
            SearchResult searchResults = getSearchResultsRequest.execute();
            return modelMapper.map(searchResults, SearchResultDto.class);
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

    public Artist getArtist(String artistId) {
        final SpotifyApi spotifyApi = getSpotifyClient();
        final GetArtistRequest getArtistRequest = spotifyApi.getArtist(artistId).build();

        try {
            return getArtistRequest.execute();
        } catch (IOException | SpotifyWebApiException e) {
            throw new SearchRequestException(e.getMessage());
        }
    }

    public PagingDto<AlbumSimplified> getArtistsAlbums(String artistId) {
        final SpotifyApi spotifyApi = getSpotifyClient();
        final GetArtistsAlbumsRequest getArtistsAlbums = spotifyApi.getArtistsAlbums(artistId).build();

        try {
            Paging<AlbumSimplified> artistsAlbums = getArtistsAlbums.execute();
            return modelMapper.map(artistsAlbums, PagingDto.class);
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
