package com.webinnhanhcandc.controller;

import com.webinnhanhcandc.entity.Settings;
import com.webinnhanhcandc.service.SettingsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/settings")
public class SettingsController {

    @Autowired
    private SettingsService settingsService;

    // Lấy tất cả settings
    @GetMapping
    public List<Settings> getAllSettings() {
        return settingsService.getAllSettings();
    }

    // Thêm một setting mới
    @PostMapping
    public ResponseEntity<String> addSetting(@RequestBody Settings settings) {
        try {
            settingsService.addSetting(settings);
            return ResponseEntity.ok("Setting added successfully");
        } catch (Exception e) {
            return ResponseEntity.status(400).body(e.getMessage());
        }
    }

    // Cập nhật một setting theo settingName
    @PutMapping("/name/{settingName}")
    public ResponseEntity<String> updateSettingByName(@PathVariable String settingName, @RequestBody Settings settings) {
        try {
            settingsService.updateSettingByName(settingName, settings);
            return ResponseEntity.ok("Setting updated successfully");
        } catch (Exception e) {
            return ResponseEntity.status(404).body(e.getMessage());
        }
    }

    // Xóa một setting theo settingName
    @DeleteMapping("/name/{settingName}")
    public ResponseEntity<String> deleteSettingByName(@PathVariable String settingName) {
        try {
            settingsService.deleteSettingByName(settingName);
            return ResponseEntity.ok("Setting deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(404).body(e.getMessage());
        }
    }
}
