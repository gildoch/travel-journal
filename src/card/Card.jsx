import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <section className="c-wrapper">
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <img src={props.imageUrl} alt="" className="c-image" />
      </div>

      <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <div className="row c-row-wrapper">
          
          <div className="c-wrapper-inline">
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <img src="/images/location.png" alt="" className="c-location" />
          </div>
          <span>{props.location}</span>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </div>
          </div>

          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <h1>{props.title}</h1>
            <h4>
              {props.startDate} - {props.endDate}
            </h4>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
