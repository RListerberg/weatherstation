package com.example.controllers;

import com.example.entities.WeatherData;
import com.example.repositories.StatisticsRepository;
import org.hibernate.criterion.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;


/**
 * <h1>Created by Mattias on 2017-02-20.</h1>
 */
@RestController
@RequestMapping("/statistics")
public class StatisticsController {

    @Autowired
    private StatisticsRepository statisticsRepository;

    @GetMapping
    public Iterable<WeatherData> findAll(Pageable pageable) {
        return statisticsRepository.findAll(pageable);
    }

    // AVG METHODS
    @RequestMapping(value = "/avg/{fieldName}", method = RequestMethod.GET)
    public double findAverage(@PathVariable String fieldName) {
        switch (fieldName) {
            case "temp":
                return statisticsRepository.findAvgTemp();
            case "rainfall":
                return statisticsRepository.findAvgRainFall();
            case "wind_velocity":
                return statisticsRepository.findAvgWindVelocity();
            case "cloud_coverage":
                return statisticsRepository.findAvgCloudCoverage();
            case "humidity":
                return statisticsRepository.findAvgHumidity();
            case "pressure":
                return statisticsRepository.findAvgPressure();
        }
        return 0;
    }
}
