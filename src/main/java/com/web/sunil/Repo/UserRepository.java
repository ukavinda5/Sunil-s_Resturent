package com.web.sunil.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.web.sunil.database.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
	
	User getUserById(Long  id);


}
