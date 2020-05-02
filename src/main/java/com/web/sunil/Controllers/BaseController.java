package com.web.sunil.Controllers;

import java.util.ArrayList;
import java.util.List;

import javax.websocket.server.PathParam;

import com.web.sunil.Repo.IItemsRepo;
import com.web.sunil.Services.ItemService;
import com.web.sunil.database.entities.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.web.sunil.Models.UserModel;
import com.web.sunil.Services.UserService;
import com.web.sunil.database.entities.User;

@CrossOrigin
@RestController
public class BaseController {
	
	
	@Autowired
	UserService userService;
	@Autowired
	ItemService itemService;
	

	@GetMapping(value="/getUsers")
	public List<User> getUsers(){
		return userService.getUsers();
	}
	
	@PostMapping(value="/upsertUser")
	public User upsertUser(@RequestBody User user) {
		return userService.saveUser(user);
	}
	
	@GetMapping(path="/getUsersById")
	  public User getUserById(@PathParam(value = "id") Long id) {
	    return userService.getUserById(id);
	  }

	@GetMapping(value = "/getHomeItems")
	public List<Item> getHomeItems(){

		return itemService.gItems();
	}
}


