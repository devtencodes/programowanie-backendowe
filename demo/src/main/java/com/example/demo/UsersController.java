package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Controller
public class UsersController {

    private final Map<Integer, UserEntity> users= new HashMap<>(Map.of(1, new UserEntity("Staszek", 63), 2, new UserEntity("Karol", 2137)));

    @GetMapping("/users")
    @ResponseBody
    public Object getUsers() {
        return users;
    }

    @GetMapping ("/users/{id}/get")
    @ResponseBody
    public Object getUser(
            @PathVariable("id") int id
    ) {
        return users.get(id);
    }

    @GetMapping("/users/{id}/remove")
    @ResponseBody
    public Object getRemoveUser(
            @PathVariable("id") int id
    ) {
        return users.remove(id);
    }

    @RequestMapping("/user/add")
    @ResponseBody
    public Object getAddUser(
            @RequestParam String name,
            @RequestParam int age
    ){
        int newId = users.size() + 1 ;
        return users.put(newId, new UserEntity(name, age));
    }
}