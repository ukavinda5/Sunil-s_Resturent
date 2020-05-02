package com.web.sunil.Services;


import com.web.sunil.Repo.IItemsRepo;
import com.web.sunil.database.entities.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ItemService {
    @Autowired
    IItemsRepo iItemsRepo;

    public List<Item> gItems(){
        return iItemsRepo.findAll();
    }
}

