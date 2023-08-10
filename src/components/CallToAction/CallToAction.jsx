import React from 'react';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <>
      <section className="call-to-action">
        <div className="call-to-action-container">
          <div className="content">
            <h2>Explore amazing cities</h2>
            <p>Discover the best cities to travel and explore the world with us.</p>
            <button className="btn">See Cities</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToAction;