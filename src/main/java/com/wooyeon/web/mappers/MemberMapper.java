package com.wooyeon.web.mappers;

import org.springframework.stereotype.Repository;
import com.wooyeon.web.domains.Member;
@Repository
public interface MemberMapper {

	public void insertMember(Member member);
	public Member selectUserByIdPw(Member member);
	public int existId(String userId);
	public int countMember();
	public void updateMember(Member member);
	public void deleteMember(Member member);
}