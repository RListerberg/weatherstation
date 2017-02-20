package com.example.RestTest;

import com.example.entities.Station;
import com.example.entities.WeatherData;
import org.junit.After;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.sql.Date;
import java.sql.Time;
import java.util.Calendar;
import java.util.List;

import static org.assertj.core.api.Java6Assertions.assertThat;

/**
 * Created by Jonas on 2017-02-09.
 */

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
@RunWith(SpringJUnit4ClassRunner.class)
public class WeatherDataRESTTest {

    private static String weatherdataurl;
    private static String stationurl;
    private Station station;
    private WeatherData weatherData;

    @Autowired
    private TestRestTemplate restTemplate;

    @BeforeClass
    public static void setup() {
        stationurl = "http://localhost:8080/station";
        weatherdataurl = "http://localhost:8080/weatherdata";
    }

    @Before
    public void setupBeforeEachMethod() {
        station = new Station("password", 12.21f, 21.12f, false);
        station = restTemplate.postForObject(stationurl, station, Station.class);

        weatherData = new WeatherData(
                12.4f,
                40.0f,
                26.5f,
                1200f,
                5,
                40,
                3,
                "Nebulosus",
                "North",
                new Date(Calendar.getInstance().getTimeInMillis()),
                new Time(Calendar.getInstance().getTimeInMillis()),
                station
        );

        weatherData = restTemplate.postForObject(weatherdataurl, weatherData, WeatherData.class);
    }

    @After
    public void cleanUpDb() {
        restTemplate.delete(weatherdataurl + "/" + weatherData.getId());
        restTemplate.delete(stationurl + "/" + station.getId());
    }

    @Test
    public void testToGetAllWeatherData(){
        List<WeatherData> weatherDataList = restTemplate.getForObject(weatherdataurl, List.class);
        assertThat(weatherDataList.size()).isGreaterThan(0);
    }

    @Test
    public void testToGetSpecificWeatherData(){
        WeatherData returnedWeatherData = restTemplate.getForObject(weatherdataurl + "/" + weatherData.getId(), WeatherData.class);
        assertThat(returnedWeatherData.getId()).isEqualTo(weatherData.getId());
    }

    @Test
    public void testToUpdateWeatherData(){
        WeatherData returnedWeatherData = restTemplate.getForObject(weatherdataurl + "/" + weatherData.getId(), WeatherData.class);
        returnedWeatherData.setTemp(-18.7f);
        restTemplate.put(weatherdataurl, returnedWeatherData);
        assertThat(restTemplate.getForObject(weatherdataurl + "/" + returnedWeatherData.getId(), WeatherData.class).getTemp()).isEqualTo(-18.7f);
    }
}
