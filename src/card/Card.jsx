import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <section className="c-wrapper">
      <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <img src={props.imageUrl} alt="" className="c-image" />
      </div>

      <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <div className="row">
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <span>{props.location}</span>
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </div>

          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
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
