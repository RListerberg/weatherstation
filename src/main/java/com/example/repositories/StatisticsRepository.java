package com.example.repositories;

import com.example.entities.WeatherData;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;


/**
 * <h1>Created by Mattias on 2017-02-20.</h1>
 */

public interface StatisticsRepository extends PagingAndSortingRepository<WeatherData, Integer> {
    // AVERAGE METHODS
    @Query(value="select avg(temp)from weather_data", nativeQuery = true)
    double findAvgTemp();

    @Query(value = "select avg(rainfall) from weather_data", nativeQuery = true)
    double findAvgRainFall();

    @Query(value = "select avg(wind_velocity) from weather_data", nativeQuery = true)
    double findAvgWindVelocity();

    @Query(value = "select avg(cloud_coverage) from weather_data", nativeQuery = true)
    double findAvgCloudCoverage();

    @Query(value = "select avg(humidity) from weather_data", nativeQuery = true)
    double findAvgHumidity();

    @Query(value = "select avg(pressure) from weather_data", nativeQuery = true)
    double findAvgPressure();



}
