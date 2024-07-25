package com.webinnhanhcandc.entity;

import jakarta.persistence.*;

import java.sql.Timestamp;

@Entity
@Table(name = "settings")
public class Settings {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int settingId;

    @Column(name = "setting_name")
    private String settingName;

    @Column(name = "setting_value")
    private String settingValue;

    @Column(name = "last_updated")
    private Timestamp lastUpdated;

    public Settings() {
    }

    public Settings(int settingId, String settingName, String settingValue, Timestamp lastUpdated) {
        this.settingId = settingId;
        this.settingName = settingName;
        this.settingValue = settingValue;
        this.lastUpdated = lastUpdated;
    }

    // Getters and Setters

    public int getSettingId() {
        return settingId;
    }

    public void setSettingId(int settingId) {
        this.settingId = settingId;
    }

    public String getSettingName() {
        return settingName;
    }

    public void setSettingName(String settingName) {
        this.settingName = settingName;
    }

    public String getSettingValue() {
        return settingValue;
    }

    public void setSettingValue(String settingValue) {
        this.settingValue = settingValue;
    }

    public Timestamp getLastUpdated() {
        return lastUpdated;
    }

    public void setLastUpdated(Timestamp lastUpdated) {
        this.lastUpdated = lastUpdated;
    }
}
