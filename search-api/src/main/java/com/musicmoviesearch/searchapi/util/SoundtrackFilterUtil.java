package com.musicmoviesearch.searchapi.util;

import com.wrapper.spotify.model_objects.specification.AlbumSimplified;
import com.wrapper.spotify.model_objects.specification.Track;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

@Component
public class SoundtrackFilterUtil {
    public static final String[] SOUNDTRACK_FILTERS = new String[]{
            "Motion Picture",
            "Original Music",
            "Soundtrack",
            "Music from"
    };

    public static List<Track> filterTracksBySoundtrack(List<Track> tracks) {

        List<Track> filteredTracks = tracks.stream()
                .filter(track -> {
                    List<String> filtersList = Arrays.asList(SOUNDTRACK_FILTERS);
                    return filtersList.stream().anyMatch(filter -> {
                        AlbumSimplified album = track.getAlbum();
                        return album.getName().contains(filter);
                    });
                })
                .collect(Collectors.toList());

        return filteredTracks.stream()
                .filter(distinctByKey(track -> {
                    AlbumSimplified album = track.getAlbum();
                    return parseMovieName(album.getName());
                }))
                .collect(Collectors.toList());
    };

    public static String parseMovieName(String name) {
        String patternStr = "[-(\\[]";
        Pattern pattern = Pattern.compile(patternStr);
        Matcher matcher = pattern.matcher(name);

        if (matcher.find()) {
            return name.substring(0, matcher.start()).trim();
        }

        return "?";
    };

    private static <T> Predicate<T> distinctByKey(
            Function<? super T, ?> keyExtractor) {

        Map<Object, Boolean> seen = new ConcurrentHashMap<>();
        return t -> seen.putIfAbsent(keyExtractor.apply(t), Boolean.TRUE) == null;
    }
}
