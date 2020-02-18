package com.wooyeon.web.users;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Lazy
@Component 
@AllArgsConstructor
@NoArgsConstructor

public class Users {
	
	private String userId, userName, gender, passwd, email, mobile, birthday; 
	
}
