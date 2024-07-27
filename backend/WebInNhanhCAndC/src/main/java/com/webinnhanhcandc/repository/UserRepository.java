package com.webinnhanhcandc.repository;

import com.webinnhanhcandc.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
