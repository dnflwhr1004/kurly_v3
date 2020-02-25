package com.wooyeon.web.mappers;

import java.util.List;

import org.springframework.stereotype.Repository;
import com.wooyeon.web.domains.Member;
import com.wooyeon.web.proxies.Pager;
@Repository
public interface MemberMapper {

	public void insert(Member member);
	public void update(Member member);
	public void delete(String userId);
	public void create();
	public Member selectById(String userId);
	public Member selectUserByIdPw(Member member);
	public Member selectUserByName(Member member);
	public Member selectNIP(Member member);
	public String existId(String userId);
	public String count();
	public List<?> select(Pager pager);
	public List<?> listAllEmail();
	
}