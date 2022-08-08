import React from 'react';
import { Link } from 'react-router-dom';
import './Styled/Text.scss';

const About = () => {
  return (
    <section>
      <div className="floating">
        <div className="card-object rotate">
          <header>UmbrellaCode</header>
          <aside></aside>
          <main>
            <blockquote className="message">
              I have taken this path <em className="forgotten">as</em> the
              ultimate <em class="forget">test of the value of my life, </em>{' '}
              the focus of my thoughts are dominated by the binary world,{' '}
              <em class="forget">
                his is the most difficult horizon of my life
              </em>{' '}
              and I wish with all my soul to become a developer.
              <Link to="/">Back Home ?</Link>
            </blockquote>
          </main>
        </div>
      </div>
    </section>
  );
};

export default About;
