package com.example.controllers;

import com.example.entities.Station;
import com.example.entities.WeatherData;
import com.example.repositories.StationRepository;
import com.example.repositories.WeatherDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * <h1>Created by Mattias on 2017-02-08.</h1>
 */
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/weatherdata")
public class WeatherDataController {

    @Autowired
    private WeatherDataRepository weatherDataRepository;
    @Autowired
    private StationRepository stationRepository;

    @GetMapping
    public List<WeatherData> getAllWeatherData() {
        return weatherDataRepository.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public WeatherData getASpecificWeatherData(@PathVariable int id) {
        return weatherDataRepository.findOne(id);
    }

    @PostMapping
    public WeatherData createNewWeatherData(@RequestBody WeatherData weatherData) {
        return weatherDataRepository.save(weatherData);
    }

    @PutMapping
    public WeatherData updateWeatherData(@RequestBody WeatherData weatherData) {
        return weatherDataRepository.save(weatherData);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteWeatherData(@PathVariable int id) {
        weatherDataRepository.delete(id);
    }

    @RequestMapping(value = "/station/{stationId}", method = RequestMethod.GET)
    public List<WeatherData> getWeatherDataForStation(@PathVariable int stationId) {
        return weatherDataRepository.findByStation(stationRepository.findOne(stationId));
    }
}
