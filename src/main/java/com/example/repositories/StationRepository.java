package com.example.repositories;

import com.example.entities.Station;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

/**
 * Created by juan on 2017-02-08.
 */
public interface StationRepository extends JpaRepository<Station, Integer> {
    List<Station> findAll();
}
