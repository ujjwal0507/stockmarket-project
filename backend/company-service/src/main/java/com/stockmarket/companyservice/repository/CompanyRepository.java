package com.stockmarket.companyservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.stockmarket.companyservice.entity.Company;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Integer>{
	
	public List<Company> findByNameContainingIgnoreCase(String pattern);

}
