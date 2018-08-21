package com.gim.dto;

import java.io.Serializable;
import java.util.Collection;
import java.util.Date;
import java.util.LinkedList;
import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.GrantedAuthorityImpl;
import org.springframework.security.core.userdetails.UserDetails;

import com.gim.dao.UserDAO;

public class userDTO  {

	
	private Date createDate;
	private String address1;
	private String address2;
	private String pinCode;
	private String city;
	private String state;
	private String phoneNumber;
	private int otp;
	private String profession;
	private String companyName ;
	private String message ;


	}
	
