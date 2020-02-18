package com.wooyeon.web.review;

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
public class Review {
	
	private String artSeq, ProdSeq, comments, update_date, userid;
	
}
