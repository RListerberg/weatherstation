package com.example.repositories;

import com.example.entities.WeatherData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


/**
 * <h1>Created by Mattias on 2017-02-20.</h1>
 */

public interface StatisticsRepository extends JpaRepository<WeatherData, Integer> {
    // AVERAGE METHODS
    @Query(value="select avg(temp)from weather_data", nativeQuery = true)
    double findAvgTemp();

    @Query(value = "select avg(rainfall) from weather_data", nativeQuery = true)
    double findAvgRainFall();

}
