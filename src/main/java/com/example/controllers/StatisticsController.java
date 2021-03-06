package com.example.controllers;

import com.example.entities.Station;
import com.example.entities.WeatherData;
import com.example.repositories.StationRepository;
import com.example.repositories.StatisticsRepository;
import org.hibernate.criterion.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


/**
 * <h1>Created by Mattias on 2017-02-20.</h1>
 */
@RestController
@RequestMapping("/statistics")
@CrossOrigin
public class StatisticsController {

    @Autowired
    private StatisticsRepository statisticsRepository;

    @Autowired
    private StationRepository stationRepository;

    @GetMapping
    public Iterable<WeatherData> findAll(Pageable pageable) {
        return statisticsRepository.findAll(pageable);
    }

    @GetMapping(value="/stations")
    public Iterable<Integer> findAllStationIds() {
        List<Station> stationList = stationRepository.findAll();
        List<Integer> idList = new ArrayList<>();
        stationList.forEach((curr) -> {
                idList.add(curr.getId());
        });

        return idList;//stationRepository.getAllStationIds();
    }

    @RequestMapping(value="/{stationId}", method = RequestMethod.GET)
    public Page<WeatherData> findByStation(@PathVariable int stationId, Pageable pageable) {
        return statisticsRepository.findByStationId(stationId, pageable);
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
