package com.webinnhanhcandc.service;

import com.webinnhanhcandc.entity.Product;
import com.webinnhanhcandc.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProductsSortedByCreatedAt() {
        return productRepository.findAll(Sort.by(Sort.Direction.DESC, "createdAt"));
    }
}
