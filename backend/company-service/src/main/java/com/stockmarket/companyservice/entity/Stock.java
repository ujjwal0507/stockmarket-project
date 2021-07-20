package com.stockmarket.companyservice.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="stock")
public class Stock {
	
	@Id
	@GeneratedValue
	private int id;
	
	@ManyToOne
	private Company company;
	
	@ManyToOne
	private Exchange exchange;
	
	@Column(name="stock_code")
	private String stockCode;
	
	public Stock() {
		super();
	}

	public Stock(int id, Company company, Exchange exchange, String stockCode) {
		super();
		this.id = id;
		this.company = company;
		this.exchange = exchange;
		this.stockCode = stockCode;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Company getCompany() {
		return company;
	}

	public void setCompany(Company company) {
		this.company = company;
	}

	public Exchange getExchange() {
		return exchange;
	}

	public void setExchange(Exchange exchange) {
		this.exchange = exchange;
	}

	public String getStockCode() {
		return stockCode;
	}

	public void setStockCode(String stockCode) {
		this.stockCode = stockCode;
	}
	
	
}
