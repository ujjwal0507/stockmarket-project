package com.stockmarket.sectorservice.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="Sector")
@Getter
@Setter
public class Sector {

	@Id
	@GeneratedValue
	public int id;
	
	public String name;
	
	public String brief;
	
	public Sector() {
		super();
	}
	
	public Sector(String name, String brief) {
		this.name = name;
		this.brief = brief;
	}
	
}
