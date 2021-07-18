package com.stockmarket.companyservice.entity;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="ipo")
@Getter
@Setter
public class Ipo {
	
	@Id
	@GeneratedValue
	public int id;
	
	@OneToOne
	public Company company;
	
	@OneToOne
	public Exchange exchange;
	
	@Column(name="price_per_share")
	public double pricePerShare;
	
	@Column(name="total_shares")
	public int totalShares;
	
	@Column(name="open_date_time")
	public Timestamp openDateTime;
	
	public String remarks;
}
