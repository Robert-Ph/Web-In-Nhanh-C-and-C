package com.webinnhanhcandc.repository;

import com.webinnhanhcandc.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, Long> {
}
