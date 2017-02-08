package com.example.entities;

import javax.persistence.*;

/**
 * Created by juan on 2017-02-08.
 */

@Entity
public class WeatherData {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private float temp, humidity, windVelocity, preasure;
    private int rainfall, cloudBase, cloudCoverage;
    private String cloudType, windDirection;

    @ManyToOne
    private Station station;

    public WeatherData() {
    }

    public WeatherData(float temp, float humidity, float windVelocity, float preasure, int rainfall, int cloudBase, int cloudCoverage, String cloudType, String windDirection, Station station) {
        this.temp = temp;
        this.humidity = humidity;
        this.windVelocity = windVelocity;
        this.preasure = preasure;
        this.rainfall = rainfall;
        this.cloudBase = cloudBase;
        this.cloudCoverage = cloudCoverage;
        this.cloudType = cloudType;
        this.windDirection = windDirection;
        this.station = station;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public float getTemp() {
        return temp;
    }

    public void setTemp(float temp) {
        this.temp = temp;
    }

    public float getHumidity() {
        return humidity;
    }

    public void setHumidity(float humidity) {
        this.humidity = humidity;
    }

    public float getWindVelocity() {
        return windVelocity;
    }

    public void setWindVelocity(float windVelocity) {
        this.windVelocity = windVelocity;
    }

    public float getPreasure() {
        return preasure;
    }

    public void setPreasure(float preasure) {
        this.preasure = preasure;
    }

    public int getRainfall() {
        return rainfall;
    }

    public void setRainfall(int rainfall) {
        this.rainfall = rainfall;
    }

    public int getCloudBase() {
        return cloudBase;
    }

    public void setCloudBase(int cloudBase) {
        this.cloudBase = cloudBase;
    }

    public int getCloudCoverage() {
        return cloudCoverage;
    }

    public void setCloudCoverage(int cloudCoverage) {
        this.cloudCoverage = cloudCoverage;
    }

    public String getCloudType() {
        return cloudType;
    }

    public void setCloudType(String cloudType) {
        this.cloudType = cloudType;
    }

    public String getWindDirection() {
        return windDirection;
    }

    public void setWindDirection(String windDirection) {
        this.windDirection = windDirection;
    }

    public Station getStation() {
        return station;
    }

    public void setStation(Station station) {
        this.station = station;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof WeatherData)) return false;

        WeatherData that = (WeatherData) o;

        if (getId() != that.getId()) return false;
        if (Float.compare(that.getTemp(), getTemp()) != 0) return false;
        if (Float.compare(that.getHumidity(), getHumidity()) != 0) return false;
        if (Float.compare(that.getWindVelocity(), getWindVelocity()) != 0) return false;
        if (Float.compare(that.getPreasure(), getPreasure()) != 0) return false;
        if (getRainfall() != that.getRainfall()) return false;
        if (getCloudBase() != that.getCloudBase()) return false;
        if (getCloudCoverage() != that.getCloudCoverage()) return false;
        if (getCloudType() != null ? !getCloudType().equals(that.getCloudType()) : that.getCloudType() != null)
            return false;
        if (getWindDirection() != null ? !getWindDirection().equals(that.getWindDirection()) : that.getWindDirection() != null)
            return false;
        return getStation() != null ? getStation().equals(that.getStation()) : that.getStation() == null;
    }

    @Override
    public int hashCode() {
        int result = getId();
        result = 31 * result + (getTemp() != +0.0f ? Float.floatToIntBits(getTemp()) : 0);
        result = 31 * result + (getHumidity() != +0.0f ? Float.floatToIntBits(getHumidity()) : 0);
        result = 31 * result + (getWindVelocity() != +0.0f ? Float.floatToIntBits(getWindVelocity()) : 0);
        result = 31 * result + (getPreasure() != +0.0f ? Float.floatToIntBits(getPreasure()) : 0);
        result = 31 * result + getRainfall();
        result = 31 * result + getCloudBase();
        result = 31 * result + getCloudCoverage();
        result = 31 * result + (getCloudType() != null ? getCloudType().hashCode() : 0);
        result = 31 * result + (getWindDirection() != null ? getWindDirection().hashCode() : 0);
        result = 31 * result + (getStation() != null ? getStation().hashCode() : 0);
        return result;
    }
}