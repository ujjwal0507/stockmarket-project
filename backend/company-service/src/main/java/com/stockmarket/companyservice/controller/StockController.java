package com.stockmarket.companyservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stockmarket.companyservice.entity.Stock;
import com.stockmarket.companyservice.service.StockService;

@RestController
@RequestMapping("/company")
public class StockController {

	@Autowired
	public StockService stockService;
	
	@GetMapping("/getStock")
	private ResponseEntity<List<Stock>> getStock(){
		return ResponseEntity.ok(stockService.getStock());
	}
	
	@PostMapping("/addStock")
	private ResponseEntity<Stock> addStock(@RequestBody Stock stock){
		return ResponseEntity.ok(stockService.addStock(stock));
	}
}
