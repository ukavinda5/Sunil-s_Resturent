package com.web.sunil.database.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class OrderItem {
    @Id
    private long id;
    private long qty;

    @ManyToOne
//    @JoinColumn(name = "item_id")
    private  Item  item;

    @ManyToOne
//    @JoinColumn(name = "order_id")
    private  Order  order;


}
