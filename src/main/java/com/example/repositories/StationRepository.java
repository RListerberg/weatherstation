package com.example.repositories;

import com.example.entities.Station;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by juan on 2017-02-08.
 */
public interface StationRepository extends JpaRepository<Station, Integer> {
}
