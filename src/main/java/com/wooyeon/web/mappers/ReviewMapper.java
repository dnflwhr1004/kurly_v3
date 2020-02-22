package com.wooyeon.web.mappers;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.wooyeon.web.domains.Review;
import com.wooyeon.web.proxies.Pager;

@Repository
public interface ReviewMapper {

	public void insertReview(Review r);
	public String countReview();
	public List<Review> selectAll(Pager o);
	public void updateReview(Review review);
	public void deleteReview(Review review);
}
