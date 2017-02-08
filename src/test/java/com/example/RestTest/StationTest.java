package com.example.RestTest;

import com.example.entities.Station;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Java6Assertions.assertThat;

/**
 * <h1>Created by Mattias on 2017-02-08.</h1>
 */
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
@RunWith(SpringRunner.class)
public class StationTest {

    private static String url;

    @Autowired
    private TestRestTemplate restTemplate;

    @Before
    public void setup() {
        url = "http://localhost:8080/station";
    }

    @Test
    public void testToGetAllStations() {
        assertThat(restTemplate.getForObject(url, Station[].class)).isNotNull();
    }

}
