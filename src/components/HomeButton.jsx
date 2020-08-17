import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeButton() {
  return (
    <div>
      <Link to="/">
        <img
          src="/images/homenav.png"
          alt="homebutton"
          className="home-button"
        />
      </Link>
    </div>
  );
}
