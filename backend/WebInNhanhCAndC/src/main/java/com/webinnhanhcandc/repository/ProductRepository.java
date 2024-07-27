package com.webinnhanhcandc.repository;

import com.webinnhanhcandc.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    Page<Product> findAllByOrderByCreatedAtDesc(Pageable pageable);
    Page<Product> findAllByOrderByCreatedAtAsc(Pageable pageable);
    Page<Product> findByCategoryIdOrderByCreatedAtDesc(Integer categoryId, Pageable pageable);
    Page<Product> findByCategoryIdOrderByCreatedAtAsc(Integer categoryId, Pageable pageable);
    Optional<Product> findById(Integer productId);
}
