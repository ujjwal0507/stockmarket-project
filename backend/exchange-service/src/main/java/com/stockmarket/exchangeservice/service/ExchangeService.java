package com.stockmarket.exchangeservice.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stockmarket.exchangeservice.entity.Exchange;
import com.stockmarket.exchangeservice.repository.ExchangeRepository;

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
	
	public Optional<Exchange> getStockExchange(int id) {
		return exchangeRepository.findById(id);
	}
}
