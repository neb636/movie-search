package com.musicmoviesearch.searchapi.service;

import com.musicmoviesearch.searchapi.dto.spotify.AlbumDto;
import com.musicmoviesearch.searchapi.dto.spotify.PagingDto;
import com.musicmoviesearch.searchapi.dto.spotify.SearchResultDto;
import com.musicmoviesearch.searchapi.exception.SearchRequestException;
import com.wrapper.spotify.SpotifyApi;
import com.wrapper.spotify.exceptions.SpotifyWebApiException;
import com.wrapper.spotify.model_objects.credentials.ClientCredentials;
import com.wrapper.spotify.model_objects.special.SearchResult;
import com.wrapper.spotify.model_objects.specification.*;
import com.wrapper.spotify.requests.authorization.client_credentials.ClientCredentialsRequest;
import com.wrapper.spotify.requests.data.albums.GetAlbumRequest;
import com.wrapper.spotify.requests.data.artists.GetArtistRequest;
import com.wrapper.spotify.requests.data.artists.GetArtistsAlbumsRequest;
import com.wrapper.spotify.requests.data.search.SearchItemRequest;
import com.wrapper.spotify.requests.data.tracks.GetTrackRequest;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

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

    public AlbumDto getAlbum(String albumId) {
        final SpotifyApi spotifyApi = getSpotifyClient();
        final GetAlbumRequest getAlbum = spotifyApi.getAlbum(albumId).build();

        try {
            Album album = getAlbum.execute();
            return modelMapper.map(album, AlbumDto.class);
        } catch (IOException | SpotifyWebApiException e) {
            throw new SearchRequestException(e.getMessage());
        }
    }

    public List<AlbumSimplified> getArtistsAlbums(String artistId) {
        List<PagingDto<AlbumSimplified>> initialResultsList = new ArrayList<PagingDto<AlbumSimplified>>();
        List<PagingDto<AlbumSimplified>> pagingResultsList = fetchArtistsAlbumsRecursive(artistId, initialResultsList);
        List<AlbumSimplified> resultsList = new ArrayList<AlbumSimplified>();

        pagingResultsList.forEach(result -> {
            resultsList.addAll(result.getItems());
        });

        return resultsList;
    }

    public List<Track> searchTracksList(String trackName, String artistName) {
        List<PagingDto<Track>> initialResultsList = new ArrayList<>();
        List<PagingDto<Track>> pagingResultsList = fetchSearchTracksListRecursive(trackName, artistName, initialResultsList);
        List<Track> resultsList = new ArrayList<>();

        pagingResultsList.forEach(result -> {
            resultsList.addAll(result.getItems());
        });

        return resultsList;
    }

    private List<PagingDto<Track>> fetchSearchTracksListRecursive(String trackName, String artistName, List<PagingDto<Track>> resultsList) {
        final Integer offset = getOffset(resultsList);
        final SpotifyApi spotifyApi = getSpotifyClient();
        final SearchItemRequest getSearchResultsRequest = spotifyApi.searchItem(trackName + ' ' + artistName, "track" ).offset(offset).limit(50).build();

        try {
            SearchResult searchResults = getSearchResultsRequest.execute();
            PagingDto<Track> tracks = modelMapper.map(searchResults.getTracks(), PagingDto.class);

            resultsList.add(tracks);

            if (!tracks.getOffset().equals(tracks.getTotal())) {
                fetchSearchTracksListRecursive(trackName, artistName, resultsList);
            }

            return resultsList;
        } catch (IOException | SpotifyWebApiException e) {
            throw new SearchRequestException(e.getMessage());
        }
    }

    private List<PagingDto<AlbumSimplified>> fetchArtistsAlbumsRecursive(String artistId, List<PagingDto<AlbumSimplified>> resultsList) {
        final Integer offset = getOffset(resultsList);
        final SpotifyApi spotifyApi = getSpotifyClient();
        final GetArtistsAlbumsRequest getArtistsAlbums = spotifyApi.getArtistsAlbums(artistId).offset(offset).limit(50).build();
        try {
            Paging<AlbumSimplified> results = getArtistsAlbums.execute();
            PagingDto<AlbumSimplified> artistsAlbums = modelMapper.map(results,PagingDto.class);
            resultsList.add(artistsAlbums);

            if (!artistsAlbums.getOffset().equals(artistsAlbums.getTotal())) {
                fetchArtistsAlbumsRecursive(artistId, resultsList);
            }

            return resultsList;
        } catch (IOException | SpotifyWebApiException e) {
            throw new SearchRequestException(e.getMessage());
        }
    }

    private <T> Integer getOffset(List<PagingDto<T>> resultsList) {

        if (resultsList.isEmpty()) {
            return 0;
        }

        final PagingDto<T> lastItem = resultsList.get(resultsList.size() - 1);
        final Integer total = lastItem.getTotal();
        final Integer limit = lastItem.getLimit();
        final Integer offset = lastItem.getOffset();
        final int newOffset = offset + limit;

        return newOffset > total ? total : newOffset;
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
