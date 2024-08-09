package com.plancton.soutparkdle.controllers;


import com.plancton.soutparkdle.models.CharacterEntity;
import com.plancton.soutparkdle.models.Stat;
import com.plancton.soutparkdle.repositories.CharacterRepository;
import com.plancton.soutparkdle.repositories.StatRepository;
import com.plancton.soutparkdle.services.CharacterService;
import com.plancton.soutparkdle.services.StatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;
import java.util.Random;

@RestController
@CrossOrigin("*")
public class StatController {

    @Autowired
    private StatRepository statRepo;


    @Autowired
    private StatService service;

    @GetMapping("/stat")
    public List<Stat> listCharacters(){


        return service.getAll();

    }

    @GetMapping("/stat/{game}")
    Stat getCharacterById(@PathVariable String game){
        return service.getByGame(game);
    }
}









