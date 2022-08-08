import React from 'react';
import './Styled/Home.scss';

const Home = () => {
  return (
    <>
      <section className="section">
        <div id="welcome-slide">
          <img
            id="grizzly"
            src="http://riccardotartaglia.it/img/blend/grizzly.jpg"
          />
          <div id="claim">
            <h1>Welcome</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
