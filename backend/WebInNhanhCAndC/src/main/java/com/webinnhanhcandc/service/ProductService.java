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
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductService {
    @Value("${upload.dir}")
    private String uploadDir;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private MediaRepository mediaRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    public Page<ProductDTO1> getAllProductsSortedByCreatedAt(String sortDirection, int page, int size) {
        PageRequest pageRequest = PageRequest.of(page, size);
        Page<Product> products;

        if ("newest".equalsIgnoreCase(sortDirection)) {
            products = productRepository.findAllByOrderByCreatedAtDesc(pageRequest);
        } else {
            products = productRepository.findAllByOrderByCreatedAtAsc(pageRequest);
        }

        return products.map(this::convertToDTO1);
    }

    public Page<ProductDTO1> getProductsByCategorySortedByCreatedAt(Integer categoryId, String sortDirection, int page, int size) {
        PageRequest pageRequest = PageRequest.of(page, size);
        Page<Product> products;

        if ("newest".equalsIgnoreCase(sortDirection)) {
            products = productRepository.findByCategoryIdOrderByCreatedAtDesc(categoryId, pageRequest);
        } else {
            products = productRepository.findByCategoryIdOrderByCreatedAtAsc(categoryId, pageRequest);
        }

        return products.map(this::convertToDTO1);
    }

    public ProductDTO1 getProductById(Integer productId) {
        Optional<Product> productOptional = productRepository.findById(productId);
        return productOptional.map(this::convertToDTO1).orElse(null);
    }

    private ProductDTO1 convertToDTO1(Product product) {
        ProductDTO1 productDTO = new ProductDTO1();
        productDTO.setProductId(product.getProductId());
        productDTO.setCategoryId(product.getCategoryId());
        productDTO.setProductName(product.getProductName());
        productDTO.setDescription(product.getDescription());
        productDTO.setStatus(product.getStatus().name());
        productDTO.setCreatedAt(product.getCreatedAt());
        productDTO.setLastUpdated(product.getLastUpdated());

        // Lấy danh sách ảnh sản phẩm
        List<Media> medias = mediaRepository.findByProductId(product.getProductId());
        productDTO.setMedias(medias.stream().map(this::convertMediaToDTO1).collect(Collectors.toList()));

        // Lấy tên danh mục
        if (product.getCategoryId() != null) {
            Optional<Category> categoryOptional = categoryRepository.findById(product.getCategoryId());
            categoryOptional.ifPresent(category -> productDTO.setCategoryName(category.getCategoryName()));
        }

        return productDTO;
    }

    public List<MediaDTO1> addMediaToProduct(Integer productId, MultipartFile[] files) throws IOException {
        Optional<Product> productOptional = productRepository.findById(productId);
        if (productOptional.isEmpty()) {
            throw new IOException("Product not found");
        }

        List<MediaDTO1> mediaDTOList = new ArrayList<>();
        for (MultipartFile file : files) {
            String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
            File targetFile = new File(uploadDir + File.separator + fileName);
            file.transferTo(targetFile);

            Media media = new Media();
            media.setFileUrl(fileName);
            media.setFileType(file.getContentType());
            media.setFileSize((int) file.getSize());
            media.setProductId(productId);
            media.setUploadedAt(new Timestamp(System.currentTimeMillis()));

            media = mediaRepository.save(media);
            mediaDTOList.add(convertMediaToDTO1(media));
        }

        return mediaDTOList;
    }

    public void deleteMediaUrl(Integer mediaId) {
        mediaRepository.deleteById(mediaId);
    }

    public void deleteMediaPermanently(Integer mediaId) throws IOException {
        Optional<Media> mediaOptional = mediaRepository.findById(mediaId);
        if (mediaOptional.isPresent()) {
            Media media = mediaOptional.get();
            Path filePath = Paths.get(uploadDir, media.getFileUrl());
            Files.deleteIfExists(filePath);
            mediaRepository.deleteById(mediaId);
        } else {
            throw new IOException("Media not found");
        }
    }

    public ProductDTO1 updateProduct(Integer productId, ProductDTO1 productDTO) {
        Optional<Product> productOptional = productRepository.findById(productId);
        if (productOptional.isPresent()) {
            Product product = productOptional.get();
            product.setProductName(productDTO.getProductName());
            product.setDescription(productDTO.getDescription());
            if (productDTO.getStatus() != null) {
                product.setStatus(Product.ProductStatus.valueOf(productDTO.getStatus()));
            }
            if (productDTO.getCategoryId() != null) {
                product.setCategoryId(productDTO.getCategoryId());
            }
            product.setLastUpdated(new Timestamp(System.currentTimeMillis()));
            product = productRepository.save(product);
            return convertToDTO1(product);
        } else {
            return null;
        }
    }

    public ProductDTO1 createProduct(ProductDTO1 productDTO) {
        Product product = new Product();
        product.setProductName(productDTO.getProductName());
        product.setDescription(productDTO.getDescription());

        // Nếu status không có giá trị, mặc định là "available"
        if (productDTO.getStatus() != null) {
            product.setStatus(Product.ProductStatus.valueOf(productDTO.getStatus()));
        } else {
            product.setStatus(Product.ProductStatus.available);
        }

        if (productDTO.getCategoryId() != null) {
            product.setCategoryId(productDTO.getCategoryId());
        }
        product.setCreatedAt(new Timestamp(System.currentTimeMillis()));
        product.setLastUpdated(new Timestamp(System.currentTimeMillis()));
        product = productRepository.save(product);
        return convertToDTO1(product);
    }

    private MediaDTO1 convertMediaToDTO1(Media media) {
        MediaDTO1 mediaDTO = new MediaDTO1();
        mediaDTO.setMediaId(media.getMedia_id());
        mediaDTO.setFileUrl(media.getFileUrl());
        mediaDTO.setFileType(media.getFileType());
        mediaDTO.setFileSize(media.getFileSize());
        mediaDTO.setUploadedAt(media.getUploadedAt());
        return mediaDTO;
    }

}
