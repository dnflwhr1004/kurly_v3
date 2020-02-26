package com.wooyeon.web.domains;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Lazy
@Component 
@AllArgsConstructor
@NoArgsConstructor
public class Cart {

	private String cartSeq, prodSeq, userId;

	public String getCartSeq() {
		return cartSeq;
	}

	public void setCartSeq(String cartSeq) {
		this.cartSeq = cartSeq;
	}

	public String getProdSeq() {
		return prodSeq;
	}

	public void setProdSeq(String prodSeq) {
		this.prodSeq = prodSeq;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}
	
}