package com.example.repositories;

import com.example.entities.Station;
import com.example.entities.WeatherData;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * Created by juan on 2017-02-08.
 */
public interface WeatherDataRepository extends JpaRepository<WeatherData,Integer> {
    List<WeatherData> findByStation(Station station);
}
