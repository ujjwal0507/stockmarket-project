package com.stockmarket.exchangeservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.stockmarket.exchangeservice.entity.Exchange;

@Repository
public interface ExchangeRepository extends JpaRepository<Exchange, Integer>{
	
}
