package com.stockmarket.excelservice.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.stockmarket.excelservice.dto.ExcelDataDTO;

@RestController
@RequestMapping("/excel")
public class ExcelServiceController {

	@Autowired
	public RestTemplate restTemplate;
	
	@PostMapping("/addStockPrice")
	public ResponseEntity<List<ExcelDataDTO>> addStockPrice(@RequestBody List<ExcelDataDTO> excelDataDtos){
		String url = "http://COMPANY-SERVICE/company/addStockPrice";
		List<ExcelDataDTO> failedRequests = restTemplate.postForEntity(url, excelDataDtos, ArrayList.class).getBody();
		return failedRequests.size()==0? ResponseEntity.ok(failedRequests): ResponseEntity.status(HttpStatus.BAD_REQUEST).body(failedRequests);
	}
}
