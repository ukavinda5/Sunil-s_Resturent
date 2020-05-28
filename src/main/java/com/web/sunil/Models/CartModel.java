package com.web.sunil.Models;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class CartModel {


    private static CartModel instance=null;
    private CartModel()
    {

    }

    public static CartModel getInstance(){
        if(instance == null){
            instance=new CartModel();
        }
        return instance;
    }


    HashMap<Long , List<Item>>  carts=new HashMap<>();


   public void  add(long userId,long itemId) throws Exception {
        if(carts.get(userId) !=null){
            List userCart=carts.get(userId);

            if(userCart.contains(itemId)){
                throw new Exception("Item Already Exist");
            }else{
                Item item= new Item();
                item.setId(itemId);
                item.setQty(1);
                userCart.add(item);
            }
        }else{
            List userCart= new ArrayList();
            Item item= new Item();
            item.setId(itemId);
            item.setQty(1);
            userCart.add(item);
            carts.put(userId,userCart);
        }
   }

   public List<Item> getCart(long userId){
       return carts.get(userId);
   }
}

