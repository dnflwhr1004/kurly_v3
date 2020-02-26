package com.wooyeon.web.domains;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Lazy
@Component 
@AllArgsConstructor
@NoArgsConstructor
public class Review {
	
	private String artSeq, ProdSeq, comments, updateDate, userId;

	public String getArtSeq() {
		return artSeq;
	}

	public void setArtSeq(String artSeq) {
		this.artSeq = artSeq;
	}

	public String getProdSeq() {
		return ProdSeq;
	}

	public void setProdSeq(String prodSeq) {
		ProdSeq = prodSeq;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public String getUpdateDate() {
		return updateDate;
	}

	public void setUpdateDate(String updateDate) {
		this.updateDate = updateDate;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}
	
}