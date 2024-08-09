package com.plancton.soutparkdle.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
@Table(name = "stat_table")
public class Stat {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "stat_id")
    private Integer statId;

    @Column(name = "gamesWon", length = 500, nullable = false)
    private Integer gamesWon;

    @Column(name = "average", length = 500, nullable = false)
    private Float average;

    @Column(name = "oneShots", length = 500, nullable = false)
    private Integer oneShots;

    @Column(name = "maxStreak", length = 500, nullable = false)
    private Integer  maxStreak;

    @Column(name = "currentStreak", length = 500, nullable = false)
    private Integer  currentStreak;

    @Column(name = "game", length = 500, nullable = false)
    private String game;

    public Stat() {

    }

    public Stat(Integer statId, Integer gamesWon, Float average, Integer oneShots, Integer maxStreak, Integer currentStreak, String game) {
        this.statId = statId;
        this.gamesWon = gamesWon;
        this.average = average;
        this.oneShots = oneShots;
        this.maxStreak = maxStreak;
        this.currentStreak = currentStreak;
        this.game = game;
    }

    public Integer getStatId() {
        return statId;
    }

    public void setStatId(Integer statId) {
        this.statId = statId;
    }

    public Integer getGamesWon() {
        return gamesWon;
    }

    public void setGamesWon(Integer gamesWon) {
        this.gamesWon = gamesWon;
    }

    public Float getAverage() {
        return average;
    }

    public void setAverage(Float average) {
        this.average = average;
    }

    public Integer getOneShots() {
        return oneShots;
    }

    public void setOneShots(Integer oneShots) {
        this.oneShots = oneShots;
    }

    public Integer getMaxStreak() {
        return maxStreak;
    }

    public void setMaxStreak(Integer maxStreak) {
        this.maxStreak = maxStreak;
    }

    public Integer getCurrentStreak() {
        return currentStreak;
    }

    public void setCurrentStreak(Integer currentStreak) {
        this.currentStreak = currentStreak;
    }

    public String getGame() {
        return game;
    }

    public void setGame(String game) {
        this.game = game;
    }
}
