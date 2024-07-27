package com.webinnhanhcandc.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.sql.Timestamp;

@Getter
@Setter
@ToString
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
}
