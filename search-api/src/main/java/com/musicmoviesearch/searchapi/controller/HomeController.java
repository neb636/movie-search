package com.musicmoviesearch.searchapi.controller;

import com.musicmoviesearch.searchapi.service.SpotifyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RequestMapping("/")
@RestController
public class HomeController {
    @Value("${app.version}")
    private String version;

    @GetMapping
    public HashMap<String, String> get() {
        HashMap<String, String> params = new HashMap<String, String>();
        params.put("version", version);
        return params;
    }
}
