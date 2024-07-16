package com.webinnhanhcandc.entity;

import jakarta.persistence.*;

import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int user_id;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "email")
    private String email;

    @Column(name = "full_name")
    private String full_name;

    @Column(name = "address", columnDefinition = "TEXT")
    private String address;

    @Column(name = "is_admin")
    private boolean is_admin;

    @Column(name = "created_at")
    private Timestamp created_at;

    public User() {
    }

    public User(int user_id, String username, String password, String email, String full_name, String address,
                boolean is_admin, Timestamp created_at) {
        this.user_id = user_id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.full_name = full_name;
        this.address = address;
        this.is_admin = is_admin;
        this.created_at = created_at;
    }

    public User(String username, String password, String email, String full_name, String address, boolean is_admin,
                Timestamp created_at) {
        super();
        this.username = username;
        this.password = password;
        this.email = email;
        this.full_name = full_name;
        this.address = address;
        this.is_admin = is_admin;
        this.created_at = created_at;
    }

    public User(int user_id, String email, String full_name, String address, boolean is_admin, Timestamp created_at) {
        this.user_id = user_id;
        this.email = email;
        this.full_name = full_name;
        this.address = address;
        this.is_admin = is_admin;
        this.created_at = created_at;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFull_name() {
        return full_name;
    }

    public void setFull_name(String full_name) {
        this.full_name = full_name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public boolean isIs_admin() {
        return is_admin;
    }

    public void setIs_admin(boolean is_admin) {
        this.is_admin = is_admin;
    }

    public Timestamp getCreated_at() {
        return created_at;
    }

    public void setCreated_at(Timestamp created_at) {
        this.created_at = created_at;
    }


}
