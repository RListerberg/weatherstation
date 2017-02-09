package com.example.security.jwt;

/**
 * <h1>Created by Mattias on 2017-01-12.</h1>
 */
public class AccountCredentials {
    private int id;
    private String password;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
