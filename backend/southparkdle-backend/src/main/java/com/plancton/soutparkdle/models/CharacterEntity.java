package com.plancton.soutparkdle.models;


import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="character_table")
public class CharacterEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="character_id")
    private Integer characterId;

    @Column(name="character_name",length = 240,nullable = false)
    private String character;

    @Column(name="gender",length = 120,nullable = false)
    private String gender;

    @Column(name="hair_color",length = 120,nullable = false)
    private String hairColor;

    @Column(name = "occupation", length = 120,nullable = false)
    private String occupation;

    @Column(name = "age", length = 120,nullable = false)
    private String age;

    @Column(name="grade",length = 120)
    private String grade;

    @Column(name="religion",length = 120,nullable = false)
    private String religion;

    @Column(name="family",length = 120)
    private String family;

    @Column(name="image_id",length = 120)
    private String imageId;

    @OneToMany(mappedBy = "character", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Phrase> phrases;


    public CharacterEntity() {

    }

    public CharacterEntity(String character,String imageId, String age, String gender, String hairColor, String occupation, String grade, String religion, String family) {
        this.character = character;
        this.gender = gender;
        this.age=age;
        this.imageId=imageId;
        this.hairColor = hairColor;
        this.occupation = occupation;
        this.grade = grade;
        this.religion = religion;
        this.family = family;
    }

    public List<Phrase> getPhrases() {
        return phrases;
    }

    public void setPhrases(List<Phrase> phrases) {
        this.phrases = phrases;
    }

    public String getImageId() {
        return imageId;
    }

    public void setImageId(String imageId) {
        this.imageId = imageId;
    }

    public Integer getCharacterId() {
        return characterId;
    }

    public void setCharacterId(Integer characterId) {
        this.characterId = characterId;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getCharacter() {
        return character;
    }

    public void setCharacter(String character) {
        this.character = character;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getHairColor() {
        return hairColor;
    }

    public void setHairColor(String hairColor) {
        this.hairColor = hairColor;
    }

    public String getOccupation() {
        return occupation;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public String getReligion() {
        return religion;
    }

    public void setReligion(String religion) {
        this.religion = religion;
    }

    public String getFamily() {
        return family;
    }

    public void setFamily(String family) {
        this.family = family;
    }
}
