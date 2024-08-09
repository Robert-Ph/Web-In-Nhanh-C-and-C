package com.webinnhanhcandc.dto;

import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;
import java.util.List;

@Getter
@Setter
public class ProductDTO1 {
    private Integer productId;
    private Integer categoryId;
    private String categoryName;
    private String productName;
    private String description;
    private String status;
    private Timestamp createdAt;
    private Timestamp lastUpdated;
    private List<MediaDTO1> medias;
}
