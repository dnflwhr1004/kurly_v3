package com.wooyeon.web.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wooyeon.web.domains.Cart;
import com.wooyeon.web.mappers.CartMapper;
import com.wooyeon.web.proxies.Pager;

@Service
public class CartService implements IService{

	@Autowired CartMapper cartMapper;
	@Autowired Cart cart;
	@Override public void save(Object o) { cartMapper.insert(cart);}
	@Override public void edit(Object o) { cartMapper.update((Cart)o);}
	@Override public void remove(Object o) { cartMapper.delete(String.valueOf(o));}
	@Override public String count(Object o) { return cartMapper.count();}
	@Override public Cart detail(Object o) { return cartMapper.selectById(String.valueOf(o));}
	@Override public List<?> list(Object o){ return cartMapper.select((Pager) o);}
	public void create() { cartMapper.create();}
	
}