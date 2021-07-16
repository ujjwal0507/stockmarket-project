package com.stockmarket.sectorservice.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}
