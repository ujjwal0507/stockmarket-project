package com.stockmarket.ExchangeService.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.stockmarket.ExchangeService.entity.Exchange;

@Repository
public interface ExchangeRepository extends JpaRepository<Exchange, Integer>{
	
}
