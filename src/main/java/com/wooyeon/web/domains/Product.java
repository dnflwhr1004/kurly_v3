package com.wooyeon.web.domains;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import lombok.AllArgsConstructor;

import lombok.NoArgsConstructor;


@Lazy
@Component 
@AllArgsConstructor
@NoArgsConstructor
public class Product {

	private String prodSeq, prodName, price, prodImg, saleUnit, prodInfo, category, recommand, prodVolume, packingType;

	public String getProdSeq() {
		return prodSeq;
	}

	public void setProdSeq(String prodSeq) {
		this.prodSeq = prodSeq;
	}

	public String getProdName() {
		return prodName;
	}

	public void setProdName(String prodName) {
		this.prodName = prodName;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getProdImg() {
		return prodImg;
	}

	public void setProdImg(String prodImg) {
		this.prodImg = prodImg;
	}

	public String getSaleUnit() {
		return saleUnit;
	}

	public void setSaleUnit(String saleUnit) {
		this.saleUnit = saleUnit;
	}

	public String getProdInfo() {
		return prodInfo;
	}

	public void setProdInfo(String prodInfo) {
		this.prodInfo = prodInfo;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getRecommand() {
		return recommand;
	}

	public void setRecommand(String recommand) {
		this.recommand = recommand;
	}

	public String getProdVolume() {
		return prodVolume;
	}

	public void setProdVolume(String prodVolume) {
		this.prodVolume = prodVolume;
	}

	public String getPackingType() {
		return packingType;
	}

	public void setPackingType(String packingType) {
		this.packingType = packingType;
	}
	
}