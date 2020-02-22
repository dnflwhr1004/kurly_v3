package com.wooyeon.web.mappers;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.wooyeon.web.domains.Cart;
import com.wooyeon.web.proxies.Pager;

@Repository
public interface CartMapper {

	public List<Cart> selectAll(Pager p); 
	public void deleteCart(Cart cart);
	
}
