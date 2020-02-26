package com.wooyeon.web.controllers;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;
import java.util.function.Supplier;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wooyeon.web.domains.Product;
import com.wooyeon.web.enums.Messenger;
import com.wooyeon.web.generics.Box;
import com.wooyeon.web.generics.Trunk;
import com.wooyeon.web.mappers.ProductMapper;
import com.wooyeon.web.proxies.Pager;
import com.wooyeon.web.services.ProductService;
import com.wooyeon.web.util.Printer;

@RestController
@RequestMapping("/products")
public class ProductController {

	private static final Logger logger = LoggerFactory.getLogger(ProductController.class);
	@Autowired Product product;
	@Autowired Printer printer;
	@Autowired Pager pager;
	@Autowired Map<String, Object> map;
	@Autowired ProductService productService;
	
	@PostMapping("/")
	public Messenger write(@RequestBody Product param) {
		return Messenger.SUCCESS;
	}
	
	@PutMapping("/{id}")
	public Messenger update(@RequestBody Product param) {
		productService.edit(param);
		return Messenger.SUCCESS;
	}
	
	@DeleteMapping("/{id}")
	public Messenger delete(@RequestBody Product param) {
		productService.remove(param);
		return Messenger.SUCCESS;
	}
	
	@GetMapping("/")
	public List<?> get(Pager pager) {
		return productService.list(pager);
	}
	@GetMapping("/{id}")
	public Product get(@PathVariable String id) {
		System.out.println(">>> 2" + id);
		Product p = productService.detail(id);
		System.out.println(">>> 3"+p.toString());
		return p;
	}
	
	@GetMapping("/recommands")
	public Product[] getRecommands() {
		System.out.println("recomands");
		return productService.listRecommand();
	}
	
}
