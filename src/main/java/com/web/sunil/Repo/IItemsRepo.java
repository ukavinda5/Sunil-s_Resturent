package com.web.sunil.Repo;

import com.web.sunil.database.entities.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;
@Repository
public interface IItemsRepo extends JpaRepository<Item,Long> {
//    List<Item> findByPrice();
}
