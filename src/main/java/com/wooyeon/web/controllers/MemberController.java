package com.wooyeon.web.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;
import java.util.function.Function;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.wooyeon.web.domains.Member;
import com.wooyeon.web.enums.Messenger;
import com.wooyeon.web.mappers.MemberMapper;
import com.wooyeon.web.proxies.Pager;
import com.wooyeon.web.services.MemberService;
import com.wooyeon.web.util.Printer;

@RestController
@RequestMapping("/members")
public class MemberController {

	private static final Logger logger = LoggerFactory.getLogger(MemberController.class); 
	@Autowired Map<String, Object> map;
	@Autowired Member member;
	@Autowired Printer printer;
	@Autowired MemberService memberService;
	@Autowired Pager pager;
	
	@PostMapping("/")
	public Messenger join(@RequestBody Member param) {
		printer.accept("join 들어옴:" +param.toString());
		memberService.save(param);
		return Messenger.SUCCESS;
	}
	
	
	@PutMapping("/{id}")
	public Messenger update(@PathVariable String id, @RequestBody Member param) {
		memberService.edit(param);
		System.out.println(">>>" + id + "<<<<" + param);
		return Messenger.SUCCESS;
	}
	
	@DeleteMapping("/{id}")
	public Messenger delete(@PathVariable String userId, @RequestBody Member param) {
		memberService.remove(param);
		return Messenger.SUCCESS;
	}
	
	@PostMapping("/login")
	public Member login(@RequestBody Member param) {
		return memberService.login(param);
	}
	
	@GetMapping("/{userId}/existId")
	public Messenger existId(@PathVariable String userId) {
		Messenger answer = null;
		String m = memberService.existId(userId);
		System.out.println("DBanswer ::" +m);
		
		
		if(m ==null) {
			answer= Messenger.SUCCESS;
		}else {
			answer=Messenger.FAIL;
		}
		return answer;
	}
	
	@PostMapping("/selectNIP")
	public Member selectNIP(@RequestBody Member member) {
		System.out.println("controller"+member.getUserId());
		return memberService.selectNIP(member);
	}
	
	@GetMapping("/checkEmail")
	 public List<?> selectAllEmail(){
		 System.out.println("All member");
		 return memberService.listAllEmail();
	 }
	
	@PostMapping("/searchUserById")
	public Member searchUserById(@RequestBody Member param) {
		System.out.println("email::" +param.getEmail() + "  name::"+param.getUserName());
		System.out.println(">>>>" + memberService.selectUserByName(param));
		return memberService.selectUserByName(param);
	}
	
	@PostMapping("/searchPassword")
	public Member searchPassword(@RequestBody Member member) {
		System.out.println("/searchPassword++ userId::"+member.getUserId()+"userName::"+member.getUserName()+"userEmail:::"+member.getEmail());
		System.out.println("dskjflsjkdlsjfslk");
		return memberService.selectUserByIdPw(member);
	}
	/*
	@GetMapping("/search")
	public Member searchMemberById(@PathVariable String userId, @RequestBody Member param) {
		Function<Member, Member> f= t-> memberMapper.selectUserByIdPw(param);
		return f.apply(param);
	}
	*/

	
}