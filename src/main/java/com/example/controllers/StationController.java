package com.example.controllers;

import com.example.entities.Station;
import com.example.repositories.StationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * <h1>Created by Mattias on 2017-02-08.</h1>
 */
@RestController
@RequestMapping("/station")
public class StationController {

    @Autowired
    private StationRepository stationRepository;

    @GetMapping
    public List<Station> getAllStations() {
        return stationRepository.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Station getSpecificStation(@PathVariable int id) {
        return stationRepository.findOne(id);
    }

    @PostMapping
    public Station createStation(@RequestBody Station station) {
        return stationRepository.save(station);
    }

    @PutMapping
    public Station updateStation(@RequestBody Station station) {
        return stationRepository.save(station);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteStation(@PathVariable int id) {
        stationRepository.delete(id);
    }
}
