package com.web.sunil.Controllers;

import com.web.sunil.Models.CartItem;
import com.web.sunil.Models.CartModel;
import com.web.sunil.Models.Item;
import com.web.sunil.Services.CartService;
import com.web.sunil.Services.UserService;
import com.web.sunil.database.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@CrossOrigin
@RestController
public class CartController {

    @Autowired
    CartService cartService;

    @PostMapping(value="/addToCartItem")
    public void addToCart(@RequestBody CartItem cart) throws Exception {
        cartService.addToCart(cart.getUserId(),cart.getItemId());
    }

    @GetMapping(value="/getCartItems")
    public List<Item> getCartItems(@RequestParam long userId){
        return cartService.getCartItems(userId);
    }
}
