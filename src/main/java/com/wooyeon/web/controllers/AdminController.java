package com.wooyeon.web.controllers;

import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wooyeon.web.domains.Admin;
import com.wooyeon.web.mappers.AdminMapper;


@RestController
@RequestMapping("/admin")
public class AdminController {
	@Autowired Admin admin;
	@Autowired AdminMapper adminMapper;
	
	@PostMapping("/alogin")
	public Admin alogin(@RequestBody Admin param) {
		Function<Admin, Admin> m = t->adminMapper.selectAdminByIdPw(param);
		System.out.println("000000"+param);
		return m.apply(param);
	}
}
