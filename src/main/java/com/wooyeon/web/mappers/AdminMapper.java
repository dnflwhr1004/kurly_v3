package com.wooyeon.web.mappers;

import org.springframework.stereotype.Repository;

import com.wooyeon.web.domains.Admin;

@Repository
public interface AdminMapper {

	public Admin selectAdminByIdPw(Admin admin);
	
}
