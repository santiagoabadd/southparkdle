package com.plancton.soutparkdle.repositories;


import com.plancton.soutparkdle.models.CharacterEntity;
import com.plancton.soutparkdle.models.Phrase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface PhraseRepository extends JpaRepository<Phrase,Integer> {

    @Query("SELECT p.phraseId FROM Phrase p")
    List<Integer> findAllIds();

}
