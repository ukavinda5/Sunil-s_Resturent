package com.web.sunil.database.entities;

import javax.persistence.*;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class User {

  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  private Long id;
  private String name;
  private String addressame;
  private String password;

   @OneToMany(mappedBy="order")
   private List<OrderItem> orders;
}
