import React from 'react';
import { Link as Anchor } from 'react-router-dom';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="call-to-action">
      <div className="call-to-action-container">
        <div className="content">
          <h2 className="cta-title">Explore Amazing Cities</h2>
          <p className="cta-text">Discover the best cities to travel and explore the world with us.</p>
          <Anchor to="/cities" className="btn btn-primary">
            See Cities
          </Anchor>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
