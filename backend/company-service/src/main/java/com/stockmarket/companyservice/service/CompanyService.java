package com.stockmarket.companyservice.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stockmarket.companyservice.entity.Company;
import com.stockmarket.companyservice.repository.CompanyRepository;


@Service
public class CompanyService {

	@Autowired
	public CompanyRepository companyRepository;
	
	public List<Company> getCompanies(){
		return companyRepository.findAll();
	}
	
	public Company addCompany(Company company) {
		return companyRepository.save(company);
	}
	
	public Optional<Company> getCompany(int id) {
		return companyRepository.findById(id);
	}
	
	public Company updateCompany(int id, Company company) {
		company.setId(id);
		Optional<Company> companyOptional = getCompany(id);
		if(companyOptional.isEmpty()) {
			return null;
		}
		return companyRepository.save(company);
	}
	
	public List<Company> getCompanyByPattern(String pattern){
		return companyRepository.findByNameContainingIgnoreCase(pattern);
	}
	
	public List<Company> getCompanyByExchange(int id){
		return companyRepository.findCompanyByExchange(id);
	}
	
	public Company deactivateCompany(int id) {
		Optional<Company> companyOptional = getCompany(id);
		if(companyOptional.isEmpty()) {
			return null;
		}
		companyRepository.deleteById(id);
		return companyOptional.get();
	}
	
}
