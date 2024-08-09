package com.plancton.soutparkdle.controllers;



import com.plancton.soutparkdle.models.CharacterEntity;
import com.plancton.soutparkdle.repositories.CharacterRepository;
import com.plancton.soutparkdle.services.CharacterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@RestController
@CrossOrigin("*")
public class CharacterController {

    @Autowired
    private CharacterRepository characterRepo;


    @Autowired
    private CharacterService service;

    @GetMapping("/character")
    public List<CharacterEntity> listCharacters(){


        return service.getAll();

    }

    @GetMapping("/character/random")
    public Integer getRandomCharacterId() {
        List<Integer> allCharacterIds = service.getAllIds();

        Random random = new Random();
        int randomIndex = random.nextInt(allCharacterIds.size());
        int randomCharacterId = allCharacterIds.get(randomIndex);
        return randomCharacterId;
    }

    @GetMapping("/character/{id}")
    Optional<CharacterEntity> getCharacterById(@PathVariable Integer id){
        return characterRepo.findById(id);
    }
}









