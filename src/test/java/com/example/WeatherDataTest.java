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

import java.sql.Time;

import javax.transaction.Transactional;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;


/**
 * Created by juan on 2017-02-08.
 */


@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
@Transactional
public class WeatherDataTest {

	@Autowired
	private WeatherDataRepository repo;
	private WeatherData weatherData;
	private Station station;

	public Station testStationEntity() {
		station = new Station();
		station.setPassword("weather");
		station.setAdmin(true);
		station.setLat(50.73f);
		station.setLng(80.36f);
		return station;
	}


	@Before
	public void fillWeatherData() {
		weatherData = new WeatherData();

		weatherData.setId(0);
		weatherData.setCloudBase(40);
		weatherData.setCloudCoverage(3);
		weatherData.setCloudType("Nebulosus");
		weatherData.setDataDate("2017-02-04");
		weatherData.setDataTime(new Time(120023));
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

		assertEquals(weatherData.getCloudBase(), 40);
		assertEquals(weatherData.getCloudCoverage(), 3);
		assertEquals(weatherData.getCloudType(), "Nebulosus");
		assertEquals(weatherData.getDataDate().toString(), "2017-02-04");
		assertEquals(weatherData.getDataTime(), new Time(120023));
		assertEquals(weatherData.getWindDirection(), "North");
		assertEquals(weatherData.getPressure(), 876, 0.1f);
		assertEquals(weatherData.getRainfall(), 5);
		assertEquals(weatherData.getTemp(), 32.4, 0.1f);
		assertEquals(weatherData.getWindVelocity(), 26.3, 0.1f);
		assertEquals(weatherData.getStation(), station);

	}

}
