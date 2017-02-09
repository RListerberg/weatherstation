package com.example;

import com.example.entities.Station;
import com.example.entities.WeatherData;
import com.example.repositories.StationRepository;
import com.example.repositories.WeatherDataRepository;

import junit.framework.TestCase;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;


import java.sql.Date;
import java.sql.Time;
import java.time.LocalTime;

import javax.transaction.Transactional;

import static org.junit.Assert.*;


/**
 * Created by juan on 2017-02-08.
 */


@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class WeatherDataTest{

	@Autowired
	private WeatherDataRepository repo;
	private WeatherData weatherData;



	public Station testStationEntity(){
		Station station = new Station();
		station.setPassword("weather");
		station.setAdmin(true);
		station.setLat(50.73f);
		station.setLng(80.36f);
		return station;
	}

	@Before
	public void fillWeatherData(){
		weatherData = new WeatherData();


		weatherData.setId(0);
		weatherData.setCloudBase(40);
		weatherData.setCloudCoverage(3);
		weatherData.setCloudType("Nebulosus");
		weatherData.setDataDate(new Date(2017, 04, 02));
		weatherData.setDataTime(Time.valueOf(LocalTime.MAX));
		weatherData.setPressure(876);
		weatherData.setRainfall(5);
		weatherData.setStation(testStationEntity());
		weatherData.setTemp(32.4f);
		weatherData.setWindDirection("North");
		weatherData.setWindVelocity(26.3f);


	}


	@Test
	public void getWindDirection(){
		repo.save(weatherData);
		assertTrue("wind direction doesn't match", weatherData.getWindDirection().equals("North"));
	}

	@Test
	public void checkAdminStatus(){
		repo.save(weatherData);
		assertTrue("This is a superAdmin", weatherData.getStation().isAdmin());
	}


}
