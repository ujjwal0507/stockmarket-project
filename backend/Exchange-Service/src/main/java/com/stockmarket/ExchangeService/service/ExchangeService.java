package com.stockmarket.ExchangeService.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stockmarket.ExchangeService.entity.Exchange;
import com.stockmarket.ExchangeService.repository.ExchangeRepository;

@Service
public class ExchangeService {
	
	@Autowired
	public ExchangeRepository exchangeRepository;
	
	public List<Exchange> getStockExchangeList(){
		return exchangeRepository.findAll();
	}
	
	public Exchange addExchange(Exchange exchange) {
		return exchangeRepository.save(exchange);
	}
}
