import React from 'react';
import {
  FcCalendar, FcLink, FcSearch,
} from 'react-icons/fc';
import { GrNext } from 'react-icons/gr';
import { GiPartyPopper } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import image1 from '../assets/food.png';

const LandingPage = () => (
  <>
    <div className="container">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <h1 className="header">
          Imagine if
          <br />
          <span>Snapchat</span>
          <br />
          had an events.
        </h1>
        <p className="title">Easily host and share events with your friends across any social media.</p>

        <div className="status-container">
          <div className="image-container">
            <img src={image1} alt="ice-cream" className="img" />
          </div>
          <div className="detials-container">
            <h2>Movie Night</h2>
            <p>Hosted by Elysia</p>
            <div className="response">
              <h5>14 responses</h5>
              <p>see guest</p>
              <button type="button" className="invite-button">Invite</button>
            </div>

            <div className="landing-holder">
              <FcCalendar size={25} className="icons" />
              <div className="state">
                <h5>18 August 16:00PM</h5>
                <p>to 19 August 1:00PM UTC +10</p>
              </div>
              <GrNext size={25} className="icon2" />
            </div>

            <div className="landing-holder">
              <FcSearch size={25} className="icons" />
              <div className="state">
                <h5>Street name</h5>
                <p>301 Rowes Lane, WA, 7183 </p>
              </div>
              <GrNext size={25} className="icon" />
            </div>

            <div className="landing-holder">
              <FcLink size={25} className="icons" />
              <div className="state">
                <h5>Link</h5>
                <p>netflix.com</p>
              </div>
              <GrNext size={25} className="icon1" />
            </div>
          </div>
        </div>

        <Link to="/events">
          <button type="submit" className="button">
            <GiPartyPopper size={30} style={{ color: 'orange' }} />
            Create my event
          </button>
        </Link>
      </div>
    </div>
  </>

);

export default LandingPage;
