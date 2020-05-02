package com.web.sunil.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.web.sunil.Repo.UserRepository;
import com.web.sunil.database.entities.User;

import java.util.List;

@Service
public class UserService {
	
	@Autowired
	UserRepository  userRepository;
	
	
	public User saveUser(User user) {
		User user_response=userRepository.save(user);
		return user;
	}
	public List<User> getUsers(){
		return userRepository.findAll();
	}
	public User getUserById(Long id) {
		
		return userRepository.getUserById(id);
	}

}
