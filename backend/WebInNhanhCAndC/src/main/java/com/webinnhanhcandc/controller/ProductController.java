package com.webinnhanhcandc.controller;

import com.webinnhanhcandc.dto.MediaDTO1;
import com.webinnhanhcandc.dto.ProductDTO1;
import com.webinnhanhcandc.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping
    public Page<ProductDTO1> getAllProducts(@RequestParam(defaultValue = "desc") String sort,
                                            @RequestParam(defaultValue = "0") int page,
                                            @RequestParam(defaultValue = "10") int size,
                                            @RequestParam(required = false) Integer categoryId) {
        if (categoryId != null) {
            return productService.getProductsByCategorySortedByCreatedAt(categoryId, sort, page, size);
        } else {
            return productService.getAllProductsSortedByCreatedAt(sort, page, size);
        }
    }

    @GetMapping("/{productId}")
    public ProductDTO1 getProductById(@PathVariable Integer productId) {
        return productService.getProductById(productId);
    }

    @PutMapping("/{productId}")
    public ResponseEntity<ProductDTO1> updateProduct(@PathVariable Integer productId, @RequestBody ProductDTO1 productDTO) {
        ProductDTO1 updatedProduct = productService.updateProduct(productId, productDTO);
        if (updatedProduct != null) {
            return ResponseEntity.ok(updatedProduct);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @PostMapping
    public ResponseEntity<ProductDTO1> createProduct(@RequestBody ProductDTO1 productDTO) {
        ProductDTO1 createdProduct = productService.createProduct(productDTO);
        return ResponseEntity.ok(createdProduct);
    }

    @PostMapping("/{productId}/media")
    public ResponseEntity<MediaDTO1> addMediaToProduct(@PathVariable Integer productId, @RequestParam("file") MultipartFile file) {
        try {
            MediaDTO1 createdMedia = productService.addMediaToProduct(productId, file);
            return ResponseEntity.ok(createdMedia);
        } catch (IOException e) {
            return ResponseEntity.status(500).build();
        }
    }
}
