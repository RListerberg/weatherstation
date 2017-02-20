package com.example.controllers;

import com.example.entities.WeatherData;
import com.example.repositories.StatisticsRepository;
import org.hibernate.criterion.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


/**
 * <h1>Created by Mattias on 2017-02-20.</h1>
 */
@RestController
@RequestMapping("/statistics")
public class StatisticsController {

    @Autowired
    private StatisticsRepository statisticsRepository;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<WeatherData> findAll(Sort sort) {
        return statisticsRepository.findAll(sort);
    }

    @RequestMapping(value = "/avg/{fieldName}", method = RequestMethod.GET)
    public double findAverage(@PathVariable String fieldName) {
        switch (fieldName) {
            case "temp":
                return statisticsRepository.findAvgTemp();
            case "rainfall":
                return statisticsRepository.findAvgRainFall();
        }
        return 0;
    }





}
