package com.stockmarket.companyservice.entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="Exchange")
@Getter
@Setter
public class Exchange {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	public int id;
	
	public String name;
	
	public String brief;
	
	@OneToOne(cascade= {CascadeType.ALL})
	public Address address;
	
	public String remark;
	
	public Exchange() {
		super();
	}
	
	public Exchange(String name, String brief, Address address, String remark) {
		super();
		this.name = name;
		this.brief = brief;
		this.address = address;
		this.remark = remark;
	}
}
