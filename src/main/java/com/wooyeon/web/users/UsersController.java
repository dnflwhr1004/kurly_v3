package com.wooyeon.web.users;

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

import com.wooyeon.web.mapper.UsersMapper;
import com.wooyeon.web.utl.Printer;

@RestController
@RequestMapping("/users")
public class UsersController {

	private static final Logger logger = LoggerFactory.getLogger(UsersController.class); 
	@Autowired Map<String, Object> map;
	@Autowired Users users;
	@Autowired Printer printer;
	@Autowired UsersMapper usersMapper;
	
	@GetMapping("/{userId}exist")
	public Map<?, ?> existId(@PathVariable String userId) {
		Function<String, Integer> p = o-> usersMapper.existId(userId);
		map.clear();
		printer.accept("중복체크 카운트 : " +p.apply(userId));
		map.put("msg", (p.apply(userId)==0)?"SUCCESS" : "FAIL");
		return map;
	}
	
	@PostMapping("/")
	public Map<?,?> join(@RequestBody Users param) {
		printer.accept(" join 들어옴 : "+param.toString());
		Consumer<Users> c = o->usersMapper.selectUserByIdPw(param);
		c.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}
	
	@PostMapping("/{userId}")
	public Users login(@PathVariable String userId, @RequestBody Users param) {
		Function<Users,Users> f = t-> usersMapper.selectUserByIdPw(param);
		return f.apply(param);
	}
	
	@GetMapping("/{userId}")
	public Users searchUserById(@PathVariable String userId, @RequestBody Users param) {
		Function<Users,Users> f = t-> usersMapper.selectUserByIdPw(param);
		return f.apply(param);
	}
	
	@PutMapping("/{userId}")
	public Map<?,?> updateUser(@PathVariable String userId, @RequestBody Users param) {
		Consumer<Users> c = o->usersMapper.insertUser(param);
		c.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}
	
	@DeleteMapping("/{userId}")
	public Map<?,?> removeUser(@PathVariable String userId, @RequestBody Users param) {
		Consumer<Users> c = o->usersMapper.insertUser(param);
		c.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}
}
