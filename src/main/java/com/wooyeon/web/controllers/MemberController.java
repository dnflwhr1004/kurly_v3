package com.wooyeon.web.controllers;

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
import com.wooyeon.web.mappers.MemberMapper;
import com.wooyeon.web.util.Printer;

@RestController
@RequestMapping("/member")
public class MemberController {

	private static final Logger logger = LoggerFactory.getLogger(MemberController.class); 
	@Autowired Map<String, Object> map;
	@Autowired Member member;
	@Autowired Printer printer;
	@Autowired MemberMapper memberMapper;
	
	@GetMapping("/{userId}/exist")
	public Map<?, ?> existId(@PathVariable String userId) {
		Function<String, Integer> p = o-> memberMapper.existId(userId);
		map.clear();
		printer.accept("중복체크카운트:"+ p.apply(userId));
		map.put("msg", (p.apply(userId)==0) ? "SUCCESS" : "FAIL");
		return map;
	}
	
	@PostMapping("/join")
	public Map<?, ?> join(@RequestBody Member param) {
		printer.accept("join 들어옴:" +param.toString());
		Consumer<Member> m = o->memberMapper.insertMember(param);
		m.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}
	
	@PostMapping("/login")
	public Member login(@RequestBody Member param) {
		Function<Member, Member> m = t->memberMapper.selectUserByIdPw(param);
		System.out.println("000000"+param);
		return m.apply(param);
	}

	
	@GetMapping("/search")
	public Member searchMemberById(@PathVariable String userId, @RequestBody Member param) {
		Function<Member, Member> f= t-> memberMapper.selectUserByIdPw(param);
		return f.apply(param);
	}
	
	@PutMapping("/update")
	public Map<?, ?> updateMember(@PathVariable String userId, @RequestBody Member param) {
		Consumer<Member> m = o->memberMapper.updateMember(param);
		m.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}
	
	@DeleteMapping("/remove")
	public Map<?, ?> removeMember(@PathVariable String userId, @RequestBody Member param) {
		Consumer<Member> m = o->memberMapper.deleteMember(param);
		m.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}
	
}