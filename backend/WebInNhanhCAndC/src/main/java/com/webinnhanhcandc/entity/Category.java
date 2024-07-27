package com.webinnhanhcandc.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString
@Entity
@Table(name = "categories")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer category_id;

    @Column(name = "category_name")
    private String categoryName;

    @Column(name = "description")
    private String description;

    @Column(name = "parent_id")
    private Integer parentId;
}
