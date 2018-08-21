package com.gim.entity;

import java.io.Serializable;
import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.LinkedList;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.bson.types.ObjectId;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.GrantedAuthorityImpl;
import org.springframework.security.core.userdetails.UserDetails;

@SuppressWarnings({ "serial", "deprecation" })
@Entity
@Table(name = "user")
public class User implements Serializable, UserDetails {

	
	private Long id;
	
	private UUID token;
	
	private String userName;
	
	private String emailAddress;
	
	private Boolean active;
	
	private String password;
	
	private String confirmPassword;
	
	private String firstName;
	
	private boolean newsLetter;
	
	private String uCustomerGroup;
	
	private String permanentAddress;
	
	private String shippingAddress1;
	
	private String shippingAddress2;

	private boolean usr_isprsnt;
	
	private String city;
	
	private String state;
	
	private String postCode;
	
	private String company;
	
	private String lastName;
	
	private String gender;
	
	private String createDate;
	
	private String updateDate;
	
	private String accountType;
	
	private String phoneNumber;
	
	private ObjectId photoId;
	
	private byte[] photo;
	
	private String mobile;
	
	private String pin;
	
	private String locality;
	
	private Long teacherCode;
	
	private String schoolName;
	
	private Long schoolCode;
	
	private String schoolZipcode;

	
	private String contactperson;
	
	private String bankname;
	
	private String accountnumber;
	
	private String billingAddress;
	
	private Long billingpincode;
	
	private String tinnumber;
	
	private String permanentAddress2;
	
	private String pin2;
	
	private String locality2;
	
	private String city2;
	
	private String state2;
	
	private String companyCode;
	
	private com.gim.util.UserRole userRole;
	
	private String country;
	private Long usr_id;
	private String usr_dstn;
	private String usr_anniv_dt;
	private String usr_brt_dt;
	
	
	@Id
	@GeneratedValue
	@Column(name="id")
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	@Column(name="usr_tokn")
	public UUID getToken() {
		return token;
	}
	public void setToken(UUID token) {
		this.token = token;
	}
	@Column(name="usr_usr_nm")
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	@Column(name="usr_eml")
	public String getEmailAddress() {
		return emailAddress;
	}
	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}
	@Column(name="usr_acv")
	public Boolean getActive() {
		return active;
	}
	public void setActive(Boolean active) {
		this.active = active;
	}
	@Column(name="usr_pwd")
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Column(name="usr_cnfm")
	public String getConfirmPassword() {
		return confirmPassword;
	}
	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}
	@Column(name="usr_fs_nm")
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	@Column(name="usr_nw_ltr")
	public boolean isNewsLetter() {
		return newsLetter;
	}
	public void setNewsLetter(boolean newsLetter) {
		this.newsLetter = newsLetter;
	}
	@Column(name="usr_ct_gp")
	public String getuCustomerGroup() {
		return uCustomerGroup;
	}
	public void setuCustomerGroup(String uCustomerGroup) {
		this.uCustomerGroup = uCustomerGroup;
	}
	@Column(name="usr_prn_ads")
	public String getPermanentAddress() {
		return permanentAddress;
	}
	public void setPermanentAddress(String permanentAddress) {
		this.permanentAddress = permanentAddress;
	}
	@Column(name="usr_shp_ads1")
	public String getShippingAddress1() {
		return shippingAddress1;
	}
	public void setShippingAddress1(String shippingAddress1) {
		this.shippingAddress1 = shippingAddress1;
	}
	@Column(name="usr_shp_ads2")
	public String getShippingAddress2() {
		return shippingAddress2;
	}
	public void setShippingAddress2(String shippingAddress2) {
		this.shippingAddress2 = shippingAddress2;
	}
	@Column(name="usr_cty")
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	@Column(name="usr_st")
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	@Column(name="usr_pst_cd")
	public String getPostCode() {
		return postCode;
	}
	public void setPostCode(String postCode) {
		this.postCode = postCode;
	}
	@Column(name="usr_cmy")
	public String getCompany() {
		return company;
	}
	public void setCompany(String company) {
		this.company = company;
	}
	@Column(name="usr_ls_nm")
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	@Column(name="usr_gnd")
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	@Column(name="usr_crt_dt")
	public String getCreateDate() {
		return createDate;
	}
	public void setCreateDate(String createDate) {
		this.createDate = createDate;
	}
	@Column(name="usr_updt_dt")
	public String getUpdateDate() {
		return updateDate;
	}
	public void setUpdateDate(String updateDate) {
		this.updateDate = updateDate;
	}
	@Column(name="usr_acnt_typ")
	public String getAccountType() {
		return accountType;
	}
	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}
	@Column(name="usr_ph_nmb")
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	@Column(name="usr_pgph_id")
	public ObjectId getPhotoId() {
		return photoId;
	}
	public void setPhotoId(ObjectId photoId) {
		this.photoId = photoId;
	}
	@Column(name="usr_pgph")
	public byte[] getPhoto() {
		return photo;
	}
	public void setPhoto(byte[] photo) {
		this.photo = photo;
	}
	@Column(name="usr_mob")
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	@Column(name="usr_pin")
	public String getPin() {
		return pin;
	}
	public void setPin(String pin) {
		this.pin = pin;
	}
	@Column(name="usr_lcl")
	public String getLocality() {
		return locality;
	}
	public void setLocality(String locality) {
		this.locality = locality;
	}
	@Column(name="usr_tch_cd")
	public Long getTeacherCode() {
		return teacherCode;
	}
	public void setTeacherCode(Long teacherCode) {
		this.teacherCode = teacherCode;
	}
	@Column(name="usr_schl_nm")
	public String getSchoolName() {
		return schoolName;
	}
	public void setSchoolName(String schoolName) {
		this.schoolName = schoolName;
	}
	@Column(name="usr_schl_cd")
	public Long getSchoolCode() {
		return schoolCode;
	}
	public void setSchoolCode(Long schoolCode) {
		this.schoolCode = schoolCode;
	}
	@Column(name="usr_schl_zip_cd")
	public String getSchoolZipcode() {
		return schoolZipcode;
	}
	public void setSchoolZipcode(String schoolZipcode) {
		this.schoolZipcode = schoolZipcode;
	}
	@Column(name="usr_cnct_prs")
	public String getContactperson() {
		return contactperson;
	}
	public void setContactperson(String contactperson) {
		this.contactperson = contactperson;
	}
	@Column(name="usr_bk_nm")
	public String getBankname() {
		return bankname;
	}
	public void setBankname(String bankname) {
		this.bankname = bankname;
	}
	@Column(name="usr_acnt_nmb")
	public String getAccountnumber() {
		return accountnumber;
	}
	public void setAccountnumber(String accountnumber) {
		this.accountnumber = accountnumber;
	}
	@Column(name="usr_bl_ads")
	public String getBillingAddress() {
		return billingAddress;
	}
	public void setBillingAddress(String billingAddress) {
		this.billingAddress = billingAddress;
	}
	
	
	
	
	
	public Long getUsr_id() {
		return usr_id;
	}
	public void setUsr_id(Long usr_id) {
		this.usr_id = usr_id;
	}
	@Column(name="usr_bl_pin_cd")
	public Long getBillingpincode() {
		return billingpincode;
	}
	public void setBillingpincode(Long billingpincode) {
		this.billingpincode = billingpincode;
	}
	@Column(name="usr_tin_nmb")
	public String getTinnumber() {
		return tinnumber;
	}
	public void setTinnumber(String tinnumber) {
		this.tinnumber = tinnumber;
	}
	@Column(name="usr_prn_ads2")
	public String getPermanentAddress2() {
		return permanentAddress2;
	}
	public void setPermanentAddress2(String permanentAddress2) {
		this.permanentAddress2 = permanentAddress2;
	}
	@Column(name="usr_pin2")
	public String getPin2() {
		return pin2;
	}
	public void setPin2(String pin2) {
		this.pin2 = pin2;
	}
	@Column(name="usr_lcl2")
	public String getLocality2() {
		return locality2;
	}
	public void setLocality2(String locality2) {
		this.locality2 = locality2;
	}
	@Column(name="usr_cty2")
	public String getCity2() {
		return city2;
	}
	public void setCity2(String city2) {
		this.city2 = city2;
	}
	@Column(name="usr_st2")
	public String getState2() {
		return state2;
	}
	public void setState2(String state2) {
		this.state2 = state2;
	}
	@Column(name="usr_cmy_cd")
	public String getCompanyCode() {
		return companyCode;
	}
	public void setCompanyCode(String companyCode) {
		this.companyCode = companyCode;
	}
	@Column(name="usr_ro")
	public com.gim.util.UserRole getUserRole() {
		return userRole;
	}
	public void setUserRole(com.gim.util.UserRole userRole) {
		this.userRole = userRole;
	}
	@Column(name="usr_cy")
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	@Override
	@Transient
	public Collection<? extends GrantedAuthority> getAuthorities() {
		GrantedAuthority auth = new GrantedAuthorityImpl("User");
		Collection<GrantedAuthority> authorities = new LinkedList<GrantedAuthority>();
		authorities.add(auth);
		return authorities;
	}
	@Override
	@Transient
	public String getUsername() {

		return userName;
	}
	@Override
	@Transient
	public boolean isAccountNonExpired() {

		return active;
	}
	@Override
	@Transient
	public boolean isAccountNonLocked() {

		return active;
	}
	@Override
	@Transient
	public boolean isCredentialsNonExpired() {

		return active;
	}
	@Override
	@Transient
	public boolean isEnabled() {

		return active;
	}
	
	@Override
	public String toString() {
		return "User [id=" + id + ", token=" + token + ", userName=" + userName + ", emailAddress=" + emailAddress
				+ ", active=" + active + ", password=" + password + ", confirmPassword=" + confirmPassword
				+ ", firstName=" + firstName + ", newsLetter=" + newsLetter + ", uCustomerGroup=" + uCustomerGroup
				+ ", permanentAddress=" + permanentAddress + ", shippingAddress1=" + shippingAddress1
				+ ", shippingAddress2=" + shippingAddress2 + ", usr_isprsnt=" + usr_isprsnt + ", city=" + city
				+ ", state=" + state + ", postCode=" + postCode + ", company=" + company + ", lastName=" + lastName
				+ ", gender=" + gender + ", createDate=" + createDate + ", updateDate=" + updateDate + ", accountType="
				+ accountType + ", phoneNumber=" + phoneNumber + ", photoId=" + photoId + ", photo="
				+ Arrays.toString(photo) + ", mobile=" + mobile + ", pin=" + pin + ", locality=" + locality
				+ ", teacherCode=" + teacherCode + ", schoolName=" + schoolName + ", schoolCode=" + schoolCode
				+ ", schoolZipcode=" + schoolZipcode + ", contactperson=" + contactperson + ", bankname=" + bankname
				+ ", accountnumber=" + accountnumber + ", billingAddress=" + billingAddress + ", billingpincode="
				+ billingpincode + ", tinnumber=" + tinnumber + ", permanentAddress2=" + permanentAddress2 + ", pin2="
				+ pin2 + ", locality2=" + locality2 + ", city2=" + city2 + ", state2=" + state2 + ", companyCode="
				+ companyCode + ", userRole=" + userRole + ", country=" + country + ", usr_id=" + usr_id
				+ ", usr_dstn=" + usr_dstn + ", usr_anniv_dt=" + usr_anniv_dt + ", usr_brt_dt=" + usr_brt_dt + "]";
	}
	public String getUsr_dstn() {
		return usr_dstn;
	}
	public void setUsr_dstn(String usr_dstn) {
		this.usr_dstn = usr_dstn;
	}
	public String getUsr_brt_dt() {
		return usr_brt_dt;
	}
	public void setUsr_brt_dt(String usr_brt_dt) {
		this.usr_brt_dt = usr_brt_dt;
	}
	public String getUsr_anniv_dt() {
		return usr_anniv_dt;
	}
	public void setUsr_anniv_dt(String usr_anniv_dt) {
		this.usr_anniv_dt = usr_anniv_dt;
	}
	public boolean isUsr_isprsnt() {
		return usr_isprsnt;
	}
	public void setUsr_isprsnt(boolean usr_isprsnt) {
		this.usr_isprsnt = usr_isprsnt;
	}


	

}