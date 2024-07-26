package com.webinnhanhcandc.service;

import com.webinnhanhcandc.dto.MediaDTO1;
import com.webinnhanhcandc.dto.ProductDTO1;
import com.webinnhanhcandc.entity.Category;
import com.webinnhanhcandc.entity.Media;
import com.webinnhanhcandc.entity.Product;
import com.webinnhanhcandc.repository.CategoryRepository;
import com.webinnhanhcandc.repository.MediaRepository;
import com.webinnhanhcandc.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private MediaRepository mediaRepository;

    @Autowired
    private CategoryRepository categoryRepository; // Thêm CategoryRepository

    public Page<ProductDTO1> getAllProductsSortedByCreatedAt(String sortDirection, int page, int size) {
        PageRequest pageRequest = PageRequest.of(page, size);
        Page<Product> products;

        if ("desc".equalsIgnoreCase(sortDirection)) {
            products = productRepository.findAllByOrderByCreatedAtDesc(pageRequest);
        } else {
            products = productRepository.findAllByOrderByCreatedAtAsc(pageRequest);
        }

        return products.map(this::convertToDTO);
    }

    public Page<ProductDTO1> getProductsByCategorySortedByCreatedAt(Integer categoryId, String sortDirection, int page, int size) {
        PageRequest pageRequest = PageRequest.of(page, size);
        Page<Product> products;

        if ("desc".equalsIgnoreCase(sortDirection)) {
            products = productRepository.findByCategoryIdOrderByCreatedAtDesc(categoryId, pageRequest);
        } else {
            products = productRepository.findByCategoryIdOrderByCreatedAtAsc(categoryId, pageRequest);
        }

        return products.map(this::convertToDTO);
    }

    public ProductDTO1 getProductById(Integer productId) {
        Optional<Product> productOptional = productRepository.findById(productId);
        return productOptional.map(this::convertToDTO).orElse(null); // Trả về null nếu không tìm thấy sản phẩm
    }

    private ProductDTO1 convertToDTO(Product product) {
        ProductDTO1 productDTO = new ProductDTO1();
        productDTO.setProductId(product.getProductId());
        productDTO.setCategoryId(product.getCategoryId());
        productDTO.setProductName(product.getProductName());
        productDTO.setDescription(product.getDescription());
        productDTO.setStatus(product.getStatus().name());
        productDTO.setCreatedAt(product.getCreatedAt());

        // Lấy danh sách ảnh sản phẩm
        List<Media> medias = mediaRepository.findByProductId(product.getProductId());
        productDTO.setMedias(medias.stream().map(this::convertMediaToDTO).collect(Collectors.toList()));

        // Lấy tên danh mục
        if (product.getCategoryId() != null) {
            Optional<Category> categoryOptional = categoryRepository.findById(product.getCategoryId());
            categoryOptional.ifPresent(category -> productDTO.setCategoryName(category.getCategoryName()));
        }

        return productDTO;
    }

    private MediaDTO1 convertMediaToDTO(Media media) {
        MediaDTO1 mediaDTO = new MediaDTO1();
        mediaDTO.setMediaId(media.getMedia_id());
        mediaDTO.setFileUrl(media.getFileUrl());
        mediaDTO.setFileType(media.getFileType());
        mediaDTO.setFileSize(media.getFileSize());
        mediaDTO.setUploadedAt(media.getUploadedAt());
        return mediaDTO;
    }
}
