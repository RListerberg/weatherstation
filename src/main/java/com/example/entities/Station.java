package com.example.entities;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by juan on 2017-02-08.
 */
@Entity
public class Station {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @NotNull
    private String password;
    @NotNull
    private float lng;
    @NotNull
    private float lat;
    @NotNull
    private boolean admin = false;

    public Station() {
    }

    public Station(String password, float lng, float lat, boolean admin) {
        this.password = password;
        this.lng = lng;
        this.lat = lat;
        this.admin = admin;
    }

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

    public float getLng() {
        return lng;
    }

    public void setLng(float lng) {
        this.lng = lng;
    }

    public float getLat() {
        return lat;
    }

    public void setLat(float lat) {
        this.lat = lat;
    }

    public boolean isAdmin() {
        return admin;
    }

    public void setAdmin(boolean admin) {
        this.admin = admin;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Station)) return false;

        Station station = (Station) o;

        if (getId() != station.getId()) return false;
        if (Float.compare(station.getLng(), getLng()) != 0) return false;
        if (Float.compare(station.getLat(), getLat()) != 0) return false;
        if (isAdmin() != station.isAdmin()) return false;
        return getPassword() != null ? getPassword().equals(station.getPassword()) : station.getPassword() == null;
    }

    @Override
    public int hashCode() {
        int result = getId();
        result = 31 * result + (getPassword() != null ? getPassword().hashCode() : 0);
        result = 31 * result + (getLng() != +0.0f ? Float.floatToIntBits(getLng()) : 0);
        result = 31 * result + (getLat() != +0.0f ? Float.floatToIntBits(getLat()) : 0);
        result = 31 * result + (isAdmin() ? 1 : 0);
        return result;
    }

}
