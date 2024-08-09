package com.plancton.soutparkdle.services;


import com.plancton.soutparkdle.models.CharacterEntity;
import com.plancton.soutparkdle.models.Phrase;
import com.plancton.soutparkdle.repositories.CharacterRepository;
import com.plancton.soutparkdle.repositories.PhraseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PhraseService {
    PhraseRepository phraseRepo;
    @Autowired
    public PhraseService(PhraseRepository phraseRepo){
        this.phraseRepo=phraseRepo;
    }

    public Phrase registerPhrase(Phrase object) {
        try{
            return phraseRepo.save(object);
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    public Phrase getById(int id){
        return  phraseRepo.getById(id);
    }


    public List<Phrase> getAll(){
        return  phraseRepo.findAll();
    }

    public List<Integer> getAllIds(){
        return  phraseRepo.findAllIds();
    }

    public void deleteById(Integer id){
        phraseRepo.deleteById(id);
    }
    public Phrase updatePhrase(Phrase phrase){
        try{
            return phraseRepo.save(phrase);
        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }


}
