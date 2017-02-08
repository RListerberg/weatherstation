package com.example.repositories;

import com.example.entities.WeatherData;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by juan on 2017-02-08.
 */
public interface WeatherDataRepository extends JpaRepository<WeatherData,Integer> {
}
