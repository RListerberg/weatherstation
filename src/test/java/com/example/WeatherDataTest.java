package com.example;

import com.example.entities.Station;
import com.example.entities.WeatherData;
import com.example.repositories.WeatherDataRepository;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.sql.Date;
import java.sql.Time;
import java.time.LocalTime;
import java.util.Calendar;

import javax.transaction.Transactional;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;


/**
 * Created by juan on 2017-02-08.
 */


@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class WeatherDataTest {

	@Autowired
	private WeatherDataRepository repo;
	private WeatherData weatherData;


	public Station testStationEntity() {
		Station station = new Station();
		station.setPassword("weather");
		station.setAdmin(true);
		station.setLat(50.73f);
		station.setLng(80.36f);
		return station;
	}

	@Before
	public void fillWeatherData() {
		weatherData = new WeatherData();
		Date date = new Date(Calendar.getInstance().getTime().getTime());


		weatherData.setId(0);
		weatherData.setCloudBase(40);
		weatherData.setCloudCoverage(3);
		weatherData.setCloudType("Nebulosus");
		weatherData.setDataDate(date);
		weatherData.setDataTime(Time.valueOf(LocalTime.MAX));
		weatherData.setPressure(876);
		weatherData.setRainfall(5);
		weatherData.setStation(testStationEntity());
		weatherData.setTemp(32.4f);
		weatherData.setWindDirection("North");
		weatherData.setWindVelocity(26.3f);


	}


	@Test
	public void getWindDirection() {
		repo.save(weatherData);
		assertTrue("Wind direction doesn't match", weatherData.getWindDirection().equals("North"));
	}

	@Test
	public void checkAdminStatus() {
		repo.save(weatherData);
		assertTrue("This is a superAdmin", weatherData.getStation().isAdmin());
	}


	@Test
	public void weatherDataUpdate() {
		repo.save(weatherData);

		weatherData.getCloudBase();
		weatherData.getCloudCoverage();
		weatherData.getCloudType();
		weatherData.getDataDate();
		weatherData.getDataTime();
		weatherData.getPressure();
		weatherData.getRainfall();
		weatherData.getStation();
		weatherData.getTemp();
		weatherData.getWindDirection();
		weatherData.getWindVelocity();

		assertEquals(weatherData.getCloudBase(), 40);
		assertEquals(weatherData.getCloudCoverage(), 3);
		assertEquals(weatherData.getCloudType(), "Nebulosus");
		System.out.println("WeatherData date: " + weatherData.getDataDate());
		System.out.println("WeatherData Time: " + weatherData.getDataTime());
				assertEquals(weatherData.getDataDate().toString(), new Date(Calendar.getInstance().getTime().getTime()).toString());
				assertEquals(weatherData.getDataTime(), LocalTime.MAX);
		assertEquals(weatherData.getWindDirection(), "North");


	}


}
