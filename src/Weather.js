import React from "react";
import "./weather.css"
import {WiDayCloudy} from "react-icons/wi"

export default function Weather() {
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="search" placeholder="Search for a city..." className="form-control" autoFocus="on" /></div>
               <div className="col-3"> <input type="submit" value="Search" className="btn btn-primary w-100" />
               </div></div>
            </form>
            <h1>Bari</h1>
            <ul>
                <li>Wednesday 11:28</li>
                <li>Mostly Cloudy</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="icon">
                    <WiDayCloudy />
                    <span className="temperature">6</span><span className="unit">°C</span>
                </div>
                    </div>


                <div className="col-6">
                    <ul>
                        <li>Precipitation: 15%</li>
                        <li>Humidity:75%</li>
                        <li>Wind Speed: 13 km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}