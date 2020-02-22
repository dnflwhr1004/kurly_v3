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
import com.wooyeon.web.generics.Box;
import com.wooyeon.web.generics.Trunk;
import com.wooyeon.web.mappers.ProductMapper;
import com.wooyeon.web.proxies.Pager;
import com.wooyeon.web.util.Printer;

@RestController
@RequestMapping("/product")
public class ProductController {

	private static final Logger logger = LoggerFactory.getLogger(ProductController.class);
	@Autowired Product product;
	@Autowired Printer printer;
	@Autowired ProductMapper productMapper;
	@Autowired Box<Product> box;
	@Autowired Pager pager;
	@Autowired Trunk<Object> trunk;
	@Autowired Map<String, Object> map;
	
	@GetMapping("/prodlist")
	public Map<?, ?> list() {
		System.out.println("prodcontroller");
		HashMap<String, List<Product>> map = new HashMap<>();
		map.put("list", productMapper.selectAll(pager));
		return map;
	}
	
	@PostMapping("/")
	public Map<?, ?> write(@RequestBody Product param) {
		Consumer<Product> c = t-> productMapper.insertProduct(param);
		c.accept(param);
		Supplier<String> s =()-> productMapper.countProduct()+"";
		trunk.put(Arrays.asList("msg","count"),
				Arrays.asList("SUCCESS",s.get()));
		return trunk.get();
	}

	
	@PutMapping("/{prodSeq}")
	public Map<?, ?> update(@PathVariable String prodSeq, @RequestBody Product param) {
		Consumer<Product> p = t-> productMapper.updateProduct(param);
		p.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}
	
	@DeleteMapping("/{prodSeq}")
	public Map<?, ?> delete(@PathVariable String prodSeq, @RequestBody Product param) {
		Consumer<Product> p = t->productMapper.deleteProduct(param);
		p.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}
}
