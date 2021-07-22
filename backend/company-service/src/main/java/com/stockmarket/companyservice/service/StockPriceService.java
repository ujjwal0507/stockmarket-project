package com.stockmarket.companyservice.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stockmarket.companyservice.dto.ExcelDataDTO;
import com.stockmarket.companyservice.entity.StockPrice;
import com.stockmarket.companyservice.repository.StockPriceRepository;

@Service
public class StockPriceService {
	
	@Autowired
	public StockPriceRepository stockPriceRepository;
		
	public List<StockPrice> getStockPrice(){
		return stockPriceRepository.findAll();
	}
	
	public List<ExcelDataDTO> addStockPrice(List<ExcelDataDTO> excelDataDto) {
		List<ExcelDataDTO> failedInserts = new ArrayList<>();
		for(ExcelDataDTO excelData: excelDataDto) {
			try {
				stockPriceRepository.addStockPrice(excelData.getCompanyId(), excelData.getExchangeId(), excelData.getPrice(), excelData.getTimestamp());
			}
			catch(Exception e) {
				failedInserts.add(excelData);
			}
		}
		return failedInserts;
	}
	
	public List<StockPrice> getStockPrice(int companyId, int stockId, String fromTime, String toTime){
		return stockPriceRepository.getStockPriceList(companyId, stockId, fromTime, toTime);
	}
	
}
