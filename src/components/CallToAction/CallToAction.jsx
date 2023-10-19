import React from 'react';
import { Link as Anchor } from 'react-router-dom';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="call-to-action">
      <div className="call-to-action-container">
        <div className="content">
          <div className="cta-container">
            <p className="cta-text">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
          </div>
          <Anchor to="/cities" className="btn btn-primary">
            See Cities
          </Anchor>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
