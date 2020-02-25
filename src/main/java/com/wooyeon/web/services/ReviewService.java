package com.wooyeon.web.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wooyeon.web.domains.Product;
import com.wooyeon.web.domains.Review;
import com.wooyeon.web.mappers.ReviewMapper;

@Service
public class ReviewService implements IService{
 
	@Autowired ReviewMapper reviewMapper;

	@Override public void save(Object o) { reviewMapper.insert((Review)o);}
	@Override public void edit(Object o) { reviewMapper.update((Review)o);}
	@Override public void remove(Object o) { reviewMapper.delete(String.valueOf(o));}
	@Override public String count(Object o) { return reviewMapper.count();}
	@Override public Review detail(Object o) { return reviewMapper.selectByReview(String.valueOf(o));}
	@Override public List<?> list(Object o) {return reviewMapper.select((Review)o);}
}
