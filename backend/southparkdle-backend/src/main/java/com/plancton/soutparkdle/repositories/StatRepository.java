package com.plancton.soutparkdle.repositories;


import com.plancton.soutparkdle.models.CharacterEntity;
import com.plancton.soutparkdle.models.Stat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface StatRepository extends JpaRepository<Stat,Integer> {


    Stat findByGame(String game);

}
