package com.stockmarket.ExchangeService.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.stockmarket.ExchangeService.entity.Exchange;
import com.stockmarket.ExchangeService.service.ExchangeService;

@RestController
public class ExchangeServiceController {
	
	@Autowired
	public ExchangeService exchangeService;
	
	@GetMapping("/")
	public ResponseEntity<String> helloWorld(){
		return ResponseEntity.ok("Hello World");
	}
	
	@GetMapping("/getExchangeList")
	public ResponseEntity<List<Exchange>> getStockExchangeList(){
		return ResponseEntity.ok(exchangeService.getStockExchangeList());
	}
	
	@PostMapping("/addExchange")
	public ResponseEntity<Exchange> addStockExchange(@RequestBody Exchange exchange) {
		return ResponseEntity.ok(exchangeService.addExchange(exchange));
	}
}
