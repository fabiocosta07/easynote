package com.easynote.users.controllers;

import com.easynote.users.model.User;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@RestController
public class UserController {

    @GetMapping(value = "/user")
    List<User> all(){
        return Collections.nCopies(3,new User("fabio","fabiocosta07@gmail.com"));
    }

    @PostMapping(value = "/user")
    User newUser(@RequestBody User user) {
        return user;
    }

    @PutMapping(value = "/user/{id}")
    User replaceUser(@RequestBody User user, @PathVariable Long id){
        return user;
    }

    @DeleteMapping("/user/{id}")
    void deleteUser(@PathVariable Long id) {
        System.out.println(id);
    }

}
