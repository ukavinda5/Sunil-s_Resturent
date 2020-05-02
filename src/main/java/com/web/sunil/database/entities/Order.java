package com.web.sunil.database.entities;


import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Data
@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;
    private long price;
    private Date date;
    private String status;
    private long qty;
    @ManyToOne
    private User user;

    @OneToMany(mappedBy = "item")
    private List<OrderItem> orderItems;
}
