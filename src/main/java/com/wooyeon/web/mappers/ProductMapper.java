package com.wooyeon.web.mappers;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.wooyeon.web.domains.Product;
import com.wooyeon.web.proxies.Pager;

@Repository
public interface ProductMapper {

	public void insertProduct(Product p);
	public String countProduct();
	public List<Product> selectAll(Pager p);
	public void updateProduct(Product product);
	public void deleteProduct(Product product);
}
