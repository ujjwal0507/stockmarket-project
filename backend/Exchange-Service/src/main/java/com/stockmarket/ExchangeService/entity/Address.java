package com.stockmarket.ExchangeService.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="Address")
@Getter
@Setter
public class Address {
	
	@Id
	@GeneratedValue
	public int id;

	public String street;
	
	public String city;
	
	public String country;
	
	public int zip;
	
	public Address() {
		super();
	}
	
	public Address(String street, String city, String country, int zip) {
		super();
		this.street = street;
		this.city = city;
		this.country = country;
		this.zip = zip;
	}
	
}
