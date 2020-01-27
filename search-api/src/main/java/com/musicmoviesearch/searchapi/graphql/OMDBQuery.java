package com.musicmoviesearch.searchapi.graphql;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.musicmoviesearch.searchapi.domain.omdb.Movie;
import com.musicmoviesearch.searchapi.service.OMDBService;
import com.musicmoviesearch.searchapi.service.SpotifyService;
import com.musicmoviesearch.searchapi.util.SoundtrackFilterUtil;
import com.wrapper.spotify.model_objects.specification.AlbumSimplified;
import com.wrapper.spotify.model_objects.specification.Track;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Component
public class OMDBQuery implements GraphQLQueryResolver {
    @Autowired
    private OMDBService omdbService;

    @Autowired
    private SpotifyService spotifyService;

    public Movie getMovie(String title) throws IOException {
        return omdbService.getMovieByTitle(title);
    }

    public List<Movie> getMoviesListFromTrack(String trackName, String artistName) {
        List<Movie> movieList = new ArrayList<>();
        List<Track> tracksList = spotifyService.searchTracksList(trackName, artistName);
        List<Track> filteredTracksList = SoundtrackFilterUtil.filterTracksBySoundtrack(tracksList);

        filteredTracksList.forEach(track -> {
            AlbumSimplified album = track.getAlbum();
            String movieName = SoundtrackFilterUtil.parseMovieName(album.getName());

            try {
                Movie movie = omdbService.getMovieByTitle(movieName);
                movieList.add(movie);
            } catch (IOException e) {

            }
        });

        return movieList;
    }
}
