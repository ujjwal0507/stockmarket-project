package com.stockmarket.companyservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stockmarket.companyservice.entity.Ipo;

public interface IpoRepository extends JpaRepository<Ipo, Integer>{
	
	public Ipo findByCompanyId(int companyId);
	
	public List<Ipo> findAllByOrderByOpenDateTimeAsc();
	
}