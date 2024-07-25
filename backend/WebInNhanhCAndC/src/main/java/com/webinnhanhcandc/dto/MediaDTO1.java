package com.webinnhanhcandc.dto;

import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Getter
@Setter
public class MediaDTO1 {
    private Integer mediaId;
    private String fileUrl;
    private String fileType;
    private Integer fileSize;
    private Timestamp uploadedAt;
}
