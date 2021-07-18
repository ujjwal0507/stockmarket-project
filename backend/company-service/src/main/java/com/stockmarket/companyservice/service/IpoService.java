package com.stockmarket.companyservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stockmarket.companyservice.entity.Ipo;
import com.stockmarket.companyservice.repository.IpoRepository;

@Service
public class IpoService {

	@Autowired
	public IpoRepository ipoRepository;
	
	public List<Ipo> getIpoList(){
		return ipoRepository.findAll();
	}
	
	public Ipo addIpo(Ipo ipo) {
		return ipoRepository.save(ipo);
	}
	
	public Ipo getIpoByCompanyId(int companyId) {
		return ipoRepository.findByCompanyId(companyId);
	}
}
