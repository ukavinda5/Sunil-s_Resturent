package com.web.sunil;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@SpringBootApplication
public class WebProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(WebProjectApplication.class, args);
	}

}
