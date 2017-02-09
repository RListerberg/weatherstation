package com.example;

import com.example.entities.Station;
import com.example.entities.WeatherData;

import junit.framework.TestCase;

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

/**
 * Created by juan on 2017-02-08.
 */


@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class WeatherDataTest{

	@Autowired
	private TestRestTemplate restTemplate;

	@Test
	@Rollback(true)
	public void testStationEntity(){
		Station station = new Station();



	}

	@Test
	@Rollback(true)
	public void testWeatherData(){
		WeatherData weatherData = new WeatherData();

		weatherData.setId(0);
		weatherData.setCloudBase(40);
		weatherData.setCloudCoverage(3);
		weatherData.setCloudType("Nebulosus");
		weatherData.setDataDate(new Date(2017, 04, 02));
		weatherData.setDataTime(Time.valueOf(LocalTime.MAX));


	}


}
