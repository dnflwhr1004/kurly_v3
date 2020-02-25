package com.wooyeon.web.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wooyeon.web.domains.Cart;
import com.wooyeon.web.enums.Messenger;
import com.wooyeon.web.generics.Trunk;
import com.wooyeon.web.mappers.CartMapper;
import com.wooyeon.web.proxies.Pager;
import com.wooyeon.web.services.CartService;
import com.wooyeon.web.util.Printer;

@RestController
@RequestMapping("/cart")
public class CartController {
	private static final Logger logger = LoggerFactory.getLogger(CartController.class);
	@Autowired Cart cart;
	@Autowired Printer printer;
	@Autowired Pager pager;
	@Autowired Trunk<Object> trunk;
	@Autowired Map<String, Object> map;
	@Autowired CartService cartService;
	
	@GetMapping("/cartlist")
	public Messenger list(@RequestBody Cart param) {
		System.out.println("cartcontroller");
		cartService.list(param);
		return Messenger.SUCCESS;
	}
	
	/*
	@DeleteMapping("/{cartSeq}")
	public Map<?, ?> delete(@PathVariable String cartSeq, @RequestBody Cart param) {
		Consumer<Cart> c = t-> cartMapper.deleteCart(param);
		c.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		
		return map;
	}
	*/
	
	
}
