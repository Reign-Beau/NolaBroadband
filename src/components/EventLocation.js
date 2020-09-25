import React from "react";
import Map from "./Map";
const EventLocation = () => {
  return (
    <section className="event_location_area">
      <Map />
      <div className="container">
        <div className="event_location">
          <div className="contact_info_item">
            <h6>Venue Infos</h6>
            <p>
            1612 Barataria Blvd. <br />
            Marrero LA, 70072
            </p>
          </div>
          <div className="contact_info_item">
            <h6>Contact Info</h6>
            <p>
              <a href="mailto:info@nolabroadband.com">info@nolabroadband.com</a>
            </p>
            <p>
              <a href="tel:18334386652">1-833-GET-NOLA</a>
            </p>
          </div>
          <div className="f_social_icon_two">
            <a href="https://www.facebook.com/nolabroadband">
              <i className="ti-facebook"></i>
            </a>
            <a href="https://twitter.com/nolabroadband">
              <i className="ti-twitter-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EventLocation;
