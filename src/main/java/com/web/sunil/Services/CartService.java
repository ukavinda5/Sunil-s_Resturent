package com.web.sunil.Services;

import com.web.sunil.Models.CartModel;
import com.web.sunil.Models.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
public class CartService {

        CartModel cartModel= CartModel.getInstance();
        public void addToCart(long userId,long itemId) throws Exception {
            cartModel.add(userId,itemId);
        }
        public List<Item> getCartItems(long userId){
            return cartModel.getCart(userId);
        };
}
