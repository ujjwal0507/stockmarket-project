package com.stockmarket.exchangeservice.controller;

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
import org.springframework.web.client.RestTemplate;

import com.stockmarket.exchangeservice.entity.Exchange;
import com.stockmarket.exchangeservice.service.ExchangeService;

@RestController
@RequestMapping("/exchange")
public class ExchangeServiceController {
	
	@Autowired
	public ExchangeService exchangeService;
	
	@Autowired
	public RestTemplate restTemplate;
	
	@GetMapping("/getExchange")
	public ResponseEntity<List<Exchange>> getStockExchangeList(){
		return ResponseEntity.ok(exchangeService.getStockExchangeList());
	}
	
	@PostMapping("/addExchange")
	public ResponseEntity<Exchange> addStockExchange(@RequestBody Exchange exchange) {
		return ResponseEntity.ok(exchangeService.addExchange(exchange));
	}
	
	@GetMapping("/getExchange/{id}")
	public ResponseEntity getExchangeById(@PathVariable("id") int id){
		Optional<Exchange> exchangeOptional = exchangeService.getStockExchange(id);
		if(exchangeOptional.isPresent()) {
			return ResponseEntity.ok(exchangeOptional.get());
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body("The Exchange with "+id+ " was not found");
	}
	
	@GetMapping("/getCompanyByExchange/{exchangeId}")
	public ResponseEntity getCompanyByExchange(@PathVariable("exchangeId") int exchangeId) {
		String url = "http://COMPANY-SERVICE/company/getCompanyByExchange/"+exchangeId;
		return restTemplate.getForEntity(url, String.class);
	}
}
