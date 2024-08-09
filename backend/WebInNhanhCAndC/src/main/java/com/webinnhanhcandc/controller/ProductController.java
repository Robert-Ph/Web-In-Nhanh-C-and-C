package com.webinnhanhcandc.controller;

import com.webinnhanhcandc.dto.MediaDTO1;
import com.webinnhanhcandc.dto.ProductDTO1;
import com.webinnhanhcandc.dto.ProductStatusDTO;
import com.webinnhanhcandc.entity.Product;
import com.webinnhanhcandc.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

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
    public ResponseEntity<List<MediaDTO1>> addMediaToProduct(
            @PathVariable Integer productId,
            @RequestParam("files") MultipartFile[] files) {
        try {
            List<MediaDTO1> createdMedias = productService.addMediaToProduct(productId, files);
            return ResponseEntity.ok(createdMedias);
        } catch (IOException e) {
            return ResponseEntity.status(500).build();
        }
    }


    @DeleteMapping("/media/{mediaId}/url")
    public ResponseEntity<Void> deleteMediaUrl(@PathVariable Integer mediaId) {
        productService.deleteMediaUrl(mediaId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("/media/{mediaId}/permanent")
    public ResponseEntity<Void> deleteMediaPermanently(@PathVariable Integer mediaId) {
        try {
            productService.deleteMediaPermanently(mediaId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (IOException e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/statuses")
    public ResponseEntity<List<ProductStatusDTO>> getAllProductStatuses() {
        List<ProductStatusDTO> statuses = Arrays.stream(Product.ProductStatus.values())
                .map(status -> {
                    String statusInVietnamese = "";
                    switch (status) {
                        case available:
                            statusInVietnamese = "Có sẵn";
                            break;
                        case out_of_stock:
                            statusInVietnamese = "Hết hàng";
                            break;
                        case discontinued:
                            statusInVietnamese = "Ngừng kinh doanh";
                            break;
                        case hidden:
                            statusInVietnamese = "Ẩn";
                            break;
                    }
                    return new ProductStatusDTO(status.name(), statusInVietnamese);
                })
                .collect(Collectors.toList());

        statuses.forEach(s -> System.out.println(s.getValue() + ": " + s.getDisplayName()));

        return ResponseEntity.ok(statuses);
    }


}
