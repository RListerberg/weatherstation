package com.example;

import com.example.RestTest.StationRESTTest;
import org.junit.runner.RunWith;
import org.junit.runners.Suite;

/**
 * Created by juan on 2017-02-09.
 */


@RunWith(Suite.class)

@Suite.SuiteClasses({
        StationRESTTest.class,
        WeatherDataTest.class,
        WeatherDataTest.class,
        StationTest.class
})
public class TestSuite {
    public TestSuite() {
    }
}
