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
@Table(name = "medias")
public class Media {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer media_id;

    @Column(name = "file_url")
    private String fileUrl;

    @Column(name = "file_type")
    private String fileType;

    @Column(name = "file_size")
    private Integer fileSize;

    @Column(name = "uploaded_at")
    private Timestamp uploadedAt;

    @Column(name = "product_id")
    private Integer productId;
}
