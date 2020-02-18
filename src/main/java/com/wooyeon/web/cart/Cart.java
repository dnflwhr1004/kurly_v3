package com.wooyeon.web.cart;

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
public class Cart {

	private String cartSeq, prodSeq, userId;
}
