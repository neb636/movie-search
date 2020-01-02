package com.musicmoviesearch.searchapi.service;

import com.musicmoviesearch.searchapi.domain.tunefind.TunefindSong;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class TunefindService {

    private final RestTemplate restTemplate;

    public TunefindService(RestTemplateBuilder restTemplateBuilder,
                           @Value("${app.tunefind-credentials.username}") String username,
                           @Value("${app.tunefind-credentials.password}") String password,
                           @Value("${app.tunefind-credentials.api-endpoint}") String apiEndpoint) {
        this.restTemplate = restTemplateBuilder
                .rootUri(apiEndpoint)
                .basicAuthentication(username, password)
                .build();
    }

    public TunefindSong getSong(String spotifyId) {
        return restTemplate.getForObject("/song/" + spotifyId + "?id-type=spotify", TunefindSong.class);
    }
}
