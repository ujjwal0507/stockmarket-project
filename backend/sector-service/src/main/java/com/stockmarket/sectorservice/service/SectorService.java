package com.stockmarket.sectorservice.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stockmarket.sectorservice.entity.Company;
import com.stockmarket.sectorservice.entity.Sector;
import com.stockmarket.sectorservice.repository.SectorRepository;

@Service
public class SectorService {

	@Autowired
	public SectorRepository sectorRepository;
	
	public List<Sector> getSectorList(){
		return sectorRepository.findAll();
	}
	
	public Sector addSector(Sector sector) {
		return sectorRepository.save(sector);
	}
	
	public Optional<Sector> getSectorById(int id) {
		return sectorRepository.findById(id);
	}
	
	public List<Company> getCompanies(int id){
		Optional<Sector> sectorOptional = sectorRepository.findById(id);
		return sectorOptional.isPresent()?sectorOptional.get().getCompanies(): null;
	}
}
