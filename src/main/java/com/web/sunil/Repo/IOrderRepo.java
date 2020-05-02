package com.web.sunil.Repo;

import com.web.sunil.database.entities.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IOrderRepo extends JpaRepository<Order,Long> {
}
