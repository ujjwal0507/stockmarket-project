package com.stockmarket.companyservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.stockmarket.companyservice.entity.Stock;

@Repository
public interface StockRepository extends JpaRepository<Stock, Integer>{
	
}
