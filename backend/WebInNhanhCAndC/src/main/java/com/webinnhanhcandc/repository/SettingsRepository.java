package com.webinnhanhcandc.repository;

import com.webinnhanhcandc.entity.Settings;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SettingsRepository extends JpaRepository<Settings, Integer> {
    Optional<Settings> findBySettingName(String settingName);
}
