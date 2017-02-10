package com.example.controllers;

import com.example.entities.Station;
import com.example.repositories.StationRepository;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;

import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.Date;

/**
 * <h1>Created by Mattias on 2017-02-09.</h1>
 */
@RestController
public class SecurityController {

    @Autowired
    private StationRepository repository;

    @RequestMapping(value = "/user", method = RequestMethod.GET)
    public Station getLoggedInStation(HttpServletRequest request, HttpServletResponse response) {
        try {
            String username = Jwts.parser()
                    .setSigningKey("thisIsASecret")
                    .parseClaimsJws(request.getHeader("Authorization"))
                    .getBody().getSubject();
            return repository.findOne(Integer.parseInt(username));
        } catch (ExpiredJwtException e1) {
            response.setStatus(HttpServletResponse.SC_FORBIDDEN);
            return null;
        } catch (IllegalArgumentException e) {
            response.setStatus(HttpServletResponse.SC_FORBIDDEN);
            return null;
        }
    }
}