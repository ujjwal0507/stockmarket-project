package com.stockmarket.companyservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stockmarket.companyservice.entity.Ipo;
import com.stockmarket.companyservice.service.IpoService;

@RestController
@RequestMapping("/company")
public class IpoController {
	
	@Autowired
	public IpoService ipoService;
	
	@GetMapping("/getIpo")
	public ResponseEntity<List<Ipo>> getIpo(){
		return ResponseEntity.ok(ipoService.getIpoList());
	}
	
	@PostMapping("/addIpo")
	public ResponseEntity<Ipo> addIpo(@RequestBody Ipo ipo){
		return ResponseEntity.ok(ipoService.addIpo(ipo));
	}
	
	@GetMapping("/getIpoByCompany/{companyId}")
	public ResponseEntity getIpoByCompanyId(@PathVariable("companyId") int companyId) {
		Ipo ipo =  ipoService.getIpoByCompanyId(companyId);
		return ipo!=null? ResponseEntity.ok(ipo): ResponseEntity.status(HttpStatus.NOT_FOUND).body("No IPO found with company id "+companyId);
	}
}
