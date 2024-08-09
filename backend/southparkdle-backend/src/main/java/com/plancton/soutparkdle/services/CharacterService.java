package com.plancton.soutparkdle.services;


import com.plancton.soutparkdle.models.CharacterEntity;
import com.plancton.soutparkdle.repositories.CharacterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CharacterService {
    CharacterRepository characterRepo;
    @Autowired
    public CharacterService(CharacterRepository characterRepo){
        this.characterRepo=characterRepo;
    }

    public CharacterEntity registerCharacter(CharacterEntity object) {
        try{
            return characterRepo.save(object);
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }




    public List<CharacterEntity> getAll(){
        return  characterRepo.findAll();
    }

    public List<Integer> getAllIds(){
        return  characterRepo.findAllIds();
    }

    public void deleteById(Integer id){
        characterRepo.deleteById(id);
    }
    public CharacterEntity updateCharacter(CharacterEntity character){
        try{
            return characterRepo.save(character);
        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }


}
