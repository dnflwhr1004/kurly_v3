package com.wooyeon.web.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wooyeon.web.domains.Member;
import com.wooyeon.web.mappers.MemberMapper;
import com.wooyeon.web.proxies.Pager;

@Service
public class MemberService implements IService{
	@Autowired MemberMapper memberMapper;
	@Override public void save(Object o) { memberMapper.insert((Member)o);}
	@Override public void edit(Object o) { memberMapper.update((Member)o);}
	@Override public void remove(Object o) { memberMapper.delete(String.valueOf(o));}
	@Override public String count(Object o) { return memberMapper.count();}
	@Override public Member detail(Object o) { return memberMapper.selectById(String.valueOf(o));}
	@Override public List<?> list(Object o){ return memberMapper.select((Pager) o);}
	
	public void create() { memberMapper.create();}
	public String existId(String userId) {System.out.println("service");return memberMapper.existId(userId);}
	public Member selectUserByIdPw(Member member) {return memberMapper.selectUserByIdPw(member);}
	public Member selectUserByName(Member member) {return memberMapper.selectUserByName(member);}
	public Member login(Member param) {return memberMapper.selectUserByIdPw(param);};
	public Member selectNIP(Member member) {return memberMapper.selectNIP(member);}
	public List<?> listAllEmail(){return memberMapper.listAllEmail();}
}