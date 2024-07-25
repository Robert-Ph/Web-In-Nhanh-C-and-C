package com.webinnhanhcandc.service;

import com.webinnhanhcandc.entity.Settings;
import com.webinnhanhcandc.repository.SettingsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

@Service
public class SettingsService {

    @Autowired
    private SettingsRepository settingsRepository;

    public List<Settings> getAllSettings() {
        return settingsRepository.findAll();
    }
    // Thêm một setting mới
    public Settings addSetting(Settings settings) throws Exception {
        Optional<Settings> existingSetting = settingsRepository.findBySettingName(settings.getSettingName());
        if (existingSetting.isPresent()) {
            throw new Exception("Setting with the same name already exists");
        }
        return settingsRepository.save(settings);
    }

    public Settings updateSettingByName(String settingName, Settings newSettings) throws Exception {
        Optional<Settings> optionalSetting = settingsRepository.findBySettingName(settingName);
        if (optionalSetting.isPresent()) {
            Settings existingSetting = optionalSetting.get();
            existingSetting.setSettingValue(newSettings.getSettingValue());
            existingSetting.setLastUpdated(new Timestamp(System.currentTimeMillis())); // Cập nhật last_updated
            return settingsRepository.save(existingSetting);
        } else {
            throw new Exception("Setting not found");
        }
    }

    // Xóa một setting theo settingName
    public void deleteSettingByName(String settingName) throws Exception {
        Optional<Settings> existingSetting = settingsRepository.findBySettingName(settingName);
        if (existingSetting.isPresent()) {
            settingsRepository.delete(existingSetting.get());
        } else {
            throw new Exception("Setting not found");
        }
    }
}
