package com.wooyeon.web.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.wooyeon.web.domains.Product;
import com.wooyeon.web.mappers.ProductMapper;
import com.wooyeon.web.proxies.Pager;

@Service
public class ProductService implements IService {

	@Autowired ProductMapper productMapper;
	@Override public void save(Object o) { productMapper.insert((Product)o);}
	@Override public void edit(Object o) { productMapper.update((Product)o);}
	@Override public void remove(Object o) { productMapper.delete(String.valueOf(o));}
	@Override public String count(Object o) { return productMapper.count();}
	@Override public Product detail(Object o) { return productMapper.selectByProd(String.valueOf(o));}
	@Override public List<?> list(Object o){ return productMapper.select((Product)o);}
}
