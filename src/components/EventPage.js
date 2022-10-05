import React from 'react';
import { FcCalendar } from 'react-icons/fc';
import { GrLocation, GrNext } from 'react-icons/gr';
import Event from '../assets/Event-image.png';

const EventPage = () => (
  <>
    <div className="container">
      <div className="container-fluid">
        <div className="col-xl-12 col-lf-12 col-md-12 col-sm-12">
          <div className="status-container">
            <div className="image-container">
              <img src={Event} alt="ice-cream" className="img" />
            </div>
            <div className="events-container">
              <h2>Birthday Bash</h2>
              <p>Hosted by Elysia</p>

              <div className="event-holder">
                <FcCalendar size={25} className="icons" />
                <div className="state">
                  <h5>18 August 16:00PM</h5>
                  <p>to 19 August 1:00PM UTC +10</p>
                </div>
                <GrNext size={25} className="icon" />
              </div>

              <div className="event-holder">
                <GrLocation size={25} className="icons" />
                <div className="state">
                  <h5>Street name</h5>
                  <p>Suburb, State, Postcode</p>
                </div>
                <GrNext size={25} className="icon1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default EventPage;
