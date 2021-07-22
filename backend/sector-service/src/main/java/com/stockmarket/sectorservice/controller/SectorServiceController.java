package com.stockmarket.sectorservice.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stockmarket.sectorservice.entity.Company;
import com.stockmarket.sectorservice.entity.Sector;
import com.stockmarket.sectorservice.service.SectorService;

@RestController
@RequestMapping("/sector")
public class SectorServiceController {

	@Autowired
	public SectorService sectorService;
	
	@GetMapping("/getSector")
	public ResponseEntity<List<Sector>> getSectorList(){
		return ResponseEntity.ok(sectorService.getSectorList());
	}
	
	@PostMapping("/addSector")
	public ResponseEntity<Sector> addSector(@RequestBody Sector sector){
		return ResponseEntity.ok(sectorService.addSector(sector));
	}
	
	@GetMapping("/getSector/{id}")
	public ResponseEntity<?> getSector(@PathVariable("id") int id) {
		Optional<Sector> sectorOptional = sectorService.getSectorById(id);
		if(sectorOptional.isPresent()) {
			return ResponseEntity.ok(sectorOptional.get());
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Sector with id "+ id+" not found.");
	}
	
	@GetMapping("/getCompany/{id}")
	public ResponseEntity<List<Company>> getCompanies(@PathVariable("id") int id){
		return ResponseEntity.ok(sectorService.getCompanies(id));
	}
	
}
