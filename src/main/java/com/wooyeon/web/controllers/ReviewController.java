package com.wooyeon.web.controllers;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;
import java.util.function.Supplier;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wooyeon.web.domains.Review;
import com.wooyeon.web.enums.Messenger;
import com.wooyeon.web.generics.Box;
import com.wooyeon.web.generics.Trunk;
import com.wooyeon.web.mappers.ReviewMapper;
import com.wooyeon.web.proxies.Pager;
import com.wooyeon.web.services.ReviewService;
import com.wooyeon.web.util.Printer;

@RestController
@RequestMapping("/review")
public class ReviewController {

	private static final Logger logger = LoggerFactory.getLogger(ReviewController.class);
	@Autowired Map<String, Object> map;
	@Autowired Review review;
	@Autowired Printer printer;
	@Autowired Box<Review> box;
	@Qualifier Pager pager;
	@Autowired Trunk<Object> trunk;
	@Autowired ReviewService reviewService;
	
	
	
	@GetMapping("/reviewlist")
	public List<?> reviewlist(Review review) {
		System.out.println("review>>>>" + reviewService.list(review));
		return reviewService.list(review);
	}
	
	@PostMapping("/")
	public Messenger write(@RequestBody Review param) {
		printer.accept("write들어옴 : " + param.toString());
		reviewService.save(param);
		return Messenger.SUCCESS;
	} 
	
	/*
	
	
	@GetMapping("/count")
	
	public Map<?, ?> count() {
		Supplier<String> s=()-> reviewMapper.countReview()+"";
		printer.accept("카운팅" + s.get());
		trunk.put(Arrays.asList("count"), Arrays.asList(s.get()));
		return trunk.get();
		
	}
	
	@PutMapping("/{artSeq}")
	public Map<?, ?> updateReview(@PathVariable String artSeq, @RequestBody Review param) {
		Consumer<Review> r = o-> reviewMapper.updateReview(param);
		r.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}
	
	@DeleteMapping("/{artSeq}")
	public Map<?, ?> deleteReview(@PathVariable String artSeq, @RequestBody Review param){
		Consumer<Review> r = o-> reviewMapper.deleteReview(param);
		r.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}
	*/
}