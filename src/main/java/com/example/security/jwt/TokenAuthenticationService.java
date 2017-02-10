package com.example.security.jwt;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.core.env.StandardEnvironment;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Date;

/**
 * <h1>Created by Mattias on 2017-01-12.</h1>
 */
public class TokenAuthenticationService {

    private long EXPIRATIONTIME = 3600000; // One hour
    private String secret = "thisIsASecret";
    private String tokenPrefix = "Bearer";
    private String headerString = "Authorization";


    public void addAuthentication(HttpServletResponse response, String username) throws Exception{
        // Generate a token
        String JWT = Jwts.builder()
            .setSubject(username)
            .setExpiration(new Date(System.currentTimeMillis() + EXPIRATIONTIME))
            .signWith(SignatureAlgorithm.HS512, secret)
            .compact();

        response.addHeader(headerString, tokenPrefix + " " + JWT);
        response.getWriter().write(JWT);
    }

    public Authentication getAuthentication(HttpServletRequest request) throws ExpiredJwtException{
        String token = request.getHeader(headerString);
        try {
            if (token != null) {
                // Parse the token
                String username = Jwts.parser()
                        .setSigningKey(secret)
                        .parseClaimsJws(token)
                        .getBody()
                        .getSubject();
                    if (username != null) { // We managed to retrieve a user
                        return new AuthenticatedUser(username);
                    }
            }
        } catch (ExpiredJwtException e) {
            return null;
        }
        return null;

    }
}
