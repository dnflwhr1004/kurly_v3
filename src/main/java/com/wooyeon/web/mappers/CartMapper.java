package com.wooyeon.web.mappers;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.wooyeon.web.domains.Cart;
import com.wooyeon.web.proxies.Pager;

@Repository
public interface CartMapper {
	public void insert(Cart cart);
	public void update(Cart cart);
	public void delete(String cartSeq);
	public void deleteCart(Cart cart);
	public void create();
	public String count();
	public Cart selectById(String cartSeq);
	public List<Cart> select (Pager p);
	public List<Cart> selectAll(Pager p); 
	
	
}