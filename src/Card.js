import React, { useState } from "react";
import CitiesChoice from "./CitiesChoice";

export default function Card(props) {
  const { cities, foundCities } = props;

  const [isFlipped, setIsFlipped] = useState(false);

  function handleenter(e) {
    setIsFlipped(true);
  }

  function handleleave(e) {
    setIsFlipped(false);
  }

  return (
    <div
      className={`${
        isFlipped
          ? "card col-lg-4 mb-4 shadow-sm flipped"
          : "card col-lg-4 mb-4 shadow-sm"
      }`}
      key={props.id}
      onMouseEnter={handleenter}
      onMouseLeave={handleleave}
    >
      {!isFlipped && [
        <div className="card-body">
          <div className="row">
            <div className="col-sm">
              <h5 className="card-title">{props.temp}°</h5>
              <p className="card-text">Humidity: {props.humidity}</p>
            </div>
            <div className="col-sm">
              {foundCities.find(city => city === props.answer) && [
                <h3 className="card-text display-3">{props.answer}</h3>
              ]}
            </div>
          </div>
        </div>
      ]}
      {isFlipped && [
        <div className="card-body">
          <div className="row m-n4">
            {cities.map((cityname, index) => (
              <CitiesChoice
                {...props}
                name={cityname}
                index={index}
                answer={props.answer}
              />
            ))}
          </div>
        </div>
      ]}
    </div>
  );
}
