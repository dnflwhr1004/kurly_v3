package com.wooyeon.web.mappers;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.wooyeon.web.domains.Review;
import com.wooyeon.web.proxies.Pager;

@Repository
public interface ReviewMapper {

	public void insert(Review review);
	public void update(Review review);
	public void delete(String artSeq);
	public Review selectByReview(String comments);
	public String count();
	public List<?> select(Review review);
}
