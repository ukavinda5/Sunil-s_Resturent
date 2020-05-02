package com.web.sunil.database.entities;

import lombok.Data;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;


@Data
@Entity
public class Item {
    @Id
    private Long id;
    private String Inheritance;
    private Integer Time;
    private String Image;
    private Integer Price;
    private String Category;
    private String name;

    @OneToMany(mappedBy = "item")
    private List<OrderItem> item;
}
