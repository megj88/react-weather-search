import React from "react";
import FormatedDate from "./FormatedDate"
import WeatherIcon from "./WeatherIcon"
import WeatherTemperature from "./WeatherTemperature"

export default function WeatherInfo(props) {
    return (
       <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
        <ul>
            <li><FormatedDate date={props.data.date}/></li>
            <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
                <div className="float-left">
                    <WeatherIcon code={props.data.icon} size={48} />
            
                    <WeatherTemperature celsius={props.data.temp} />
            </div>
                </div>


            <div className="col-6">
                <ul>
                    <li>Humidity:{props.data.humidity}%</li>
                    <li>Wind Speed: {props.data.wind} km/h</li>
                </ul>
            </div>
        </div>
        </div>
    );
}