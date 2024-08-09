package com.plancton.soutparkdle.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

@Entity
@Table(name = "phrase_table")
public class Phrase {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "phrase_id")
    private Integer phraseId;

    @Column(name = "phrase", length = 500, nullable = false)
    private String phrase;

    @ManyToOne
    @JoinColumn(name = "character_id", nullable = false)
    @JsonBackReference
    private CharacterEntity character;

    public Phrase() {
    }

    public Phrase(String phrase, CharacterEntity character) {
        this.phrase = phrase;
        this.character = character;
    }

    public Integer getPhraseId() {
        return phraseId;
    }

    public void setPhraseId(Integer phraseId) {
        this.phraseId = phraseId;
    }

    public String getPhrase() {
        return phrase;
    }

    public void setPhrase(String phrase) {
        this.phrase = phrase;
    }

    public CharacterEntity getCharacter() {
        return character;
    }

    public void setCharacter(CharacterEntity character) {
        this.character = character;
    }

    @JsonProperty("characterId")
    public Integer getCharacterId() {
        return character.getCharacterId();
    }
}