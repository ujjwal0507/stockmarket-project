package com.stockmarket.companyservice.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stockmarket.companyservice.entity.Company;
import com.stockmarket.companyservice.service.CompanyService;
import com.stockmarket.companyservice.service.IpoService;

@RestController
@RequestMapping("/company")
public class CompanyController {
	
	@Autowired
	public CompanyService companyService;
	
	@Autowired
	public IpoService ipoService;
	
	@GetMapping("/getCompany")
	public ResponseEntity<List<Company>> getComanies(){
		return ResponseEntity.ok(companyService.getCompanies());
	}
	
	@PostMapping("/addCompany")
	public ResponseEntity<Company> addCompany(@RequestBody Company company){
		return ResponseEntity.ok(companyService.addCompany(company));
	}
	
	@GetMapping("/getCompany/{id}")
	public ResponseEntity<?> getCompany(@PathVariable("id") int id){
		Optional<Company> companyOptional = companyService.getCompany(id);
		return companyOptional.isPresent()?ResponseEntity.ok(companyOptional.get()): ResponseEntity.ok("Company with id "+id+" not found.");
	}
	
	@PutMapping("/updateCompany/{id}")
	public ResponseEntity<?> updateCompany(@PathVariable("id") int id, @RequestBody Company company) {
		Company updatedCompany = companyService.updateCompany(id, company);
		return updatedCompany!=null?ResponseEntity.ok(updatedCompany):ResponseEntity.ok("Company with id "+id+" not found");
	}
	
	@GetMapping("/getCompanyByPattern/{pattern}")
	public ResponseEntity<List<Company>> getCompanyByPattern(@PathVariable("pattern") String pattern){
		return ResponseEntity.ok(companyService.getCompanyByPattern(pattern));
	}
	
	@GetMapping("/getCompanyByExchange/{exchangeId}")
	public ResponseEntity<List<Company>> getCompanyByExchange(@PathVariable("exchangeId") int exchangeId){
		return ResponseEntity.ok(companyService.getCompanyByExchange(exchangeId));
	}
	
	@DeleteMapping("/deactivateCompany/{id}")
	public ResponseEntity<?> deactivateCompany(@PathVariable int id){
		Company deletedCompany = companyService.deactivateCompany(id);
		return deletedCompany!=null?ResponseEntity.ok(deletedCompany): ResponseEntity.ok("Company with id "+id+" not found.");
	}
	
}
