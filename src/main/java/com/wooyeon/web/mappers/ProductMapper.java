package com.wooyeon.web.mappers;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.wooyeon.web.domains.Product;
import com.wooyeon.web.proxies.Pager;

@Repository
public interface ProductMapper {

	public void insert(Product product);
	public void update(Product product);
	public void delete(String prodSeq);
	public Product selectByProd(String prodName);
	public String count();
	public List<?> select(Product product);
	public Product[] selectRecommand();
	
	
}
