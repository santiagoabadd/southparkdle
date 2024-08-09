package com.plancton.soutparkdle.services;


import com.plancton.soutparkdle.models.Phrase;
import com.plancton.soutparkdle.models.Stat;
import com.plancton.soutparkdle.repositories.PhraseRepository;
import com.plancton.soutparkdle.repositories.StatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StatService {
    StatRepository statRepo;
    @Autowired
    public StatService(StatRepository statRepo){
        this.statRepo=statRepo;
    }

    public Stat registerStat(Stat object) {
        try{
            return statRepo.save(object);
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    public Stat getById(int id){
        return  statRepo.getById(id);
    }


    public List<Stat> getAll(){
        return  statRepo.findAll();
    }

    public Stat getByGame(String game) {

            return statRepo.findByGame(game);

    }

    public void deleteById(Integer id){
        statRepo.deleteById(id);
    }
    public Stat updateStat(Stat stat){
        try{
            return statRepo.save(stat);
        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }


}
