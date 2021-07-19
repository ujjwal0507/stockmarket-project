package com.stockmarket.companyservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stockmarket.companyservice.dto.ExcelDataDTO;
import com.stockmarket.companyservice.entity.StockPrice;
import com.stockmarket.companyservice.service.StockPriceService;

@RestController
@RequestMapping("/company")
public class StockPriceController {
	
	@Autowired
	public StockPriceService stockPriceService;
	
	@GetMapping("/getStockPrice")
	public ResponseEntity<List<StockPrice>> getStockPrice(){
		return ResponseEntity.ok(stockPriceService.getStockPrice());
	}
	
	@PostMapping("/addStockPrice")
	public ResponseEntity<List<ExcelDataDTO>> addStockPrice(@RequestBody List<ExcelDataDTO> excelDataDto){
		return ResponseEntity.ok(stockPriceService.addStockPrice(excelDataDto));
	}
}
