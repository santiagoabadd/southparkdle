package com.plancton.soutparkdle.repositories;


import com.plancton.soutparkdle.models.CharacterEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface CharacterRepository extends JpaRepository<CharacterEntity,Integer> {

    @Query("SELECT c.characterId FROM CharacterEntity c")
    List<Integer> findAllIds();

}
