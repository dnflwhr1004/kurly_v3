package com.wooyeon.web.mapper;

import java.util.HashMap;

import com.wooyeon.web.users.Users;

public interface UsersMapper {

	public void insertUser(Users user);
	public Users selectUserByIdPw(Users user);
	public int existId(String uid);
	public int countUsers();
	public void createDB(HashMap<String, String> paramMap);
	public void createUser(HashMap<String, String> paramMap);
	public void dropUser(HashMap<String, String> paramMap);
	public void truncateUser(HashMap<String, String> paramMap);
}
