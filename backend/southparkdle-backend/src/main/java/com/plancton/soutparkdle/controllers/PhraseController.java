package com.plancton.soutparkdle.controllers;


import com.plancton.soutparkdle.models.CharacterEntity;
import com.plancton.soutparkdle.models.Phrase;
import com.plancton.soutparkdle.repositories.CharacterRepository;
import com.plancton.soutparkdle.repositories.PhraseRepository;
import com.plancton.soutparkdle.services.CharacterService;
import com.plancton.soutparkdle.services.PhraseService;
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
public class PhraseController {

    @Autowired
    private PhraseRepository phraseRepo;


    @Autowired
    private PhraseService service;

    @GetMapping("/phrases")
    public List<Phrase> listPhrase(){


        return service.getAll();

    }

    @GetMapping("/phrase/random")
    public Phrase getRandomPhraseId() {
        List<Integer> allPhrasesIds = service.getAllIds();

        Random random = new Random();
        int randomIndex = random.nextInt(allPhrasesIds.size());
        int randomPhraseId = allPhrasesIds.get(randomIndex);
        return service.getById(randomPhraseId);
    }

    @GetMapping("/phrase/{id}")
    Optional<Phrase> getPhraseById(@PathVariable Integer id){
        return phraseRepo.findById(id);
    }
}









