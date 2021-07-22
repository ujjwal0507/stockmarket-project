package com.stockmarket.companyservice.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import java.util.List;

@Entity
public class Sector {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	private String name;
	
	private String brief;
	
	@OneToMany(mappedBy="sector")
	@JsonProperty(access=Access.WRITE_ONLY)
	private List<Company> companies;
	
	public List<Company> getCompanies(){
		return companies;
	}
	
	public Sector() {
		super();
	}

	public Sector(int id, String name, String brief) {
		super();
		this.id = id;
		this.setName(name);
		this.setBrief(brief);
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBrief() {
		return brief;
	}

	public void setBrief(String brief) {
		this.brief = brief;
	}
	
}