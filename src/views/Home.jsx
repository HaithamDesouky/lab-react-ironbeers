import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Iron Beers</h1>

      <div className="box-container">
        <div className="boxes">
          <Link to="/allbeers">
            <img src="/images/listbeers.jpg" alt="ListOfBeers" />

            <h3>All Beers</h3>
          </Link>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora,
            laboriosam at molestias.
          </p>
        </div>

        <div className="boxes">
          <img src="/images/randombeers.jpg" alt="RandomBeer" />
          <h3>Random Beer</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora,
            laboriosam at molestias.
          </p>
        </div>

        <div className="boxes">
          <img src="/images/listbeers.jpg" alt="NewBeer" />
          <h3>New Beer</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora,
            laboriosam at molestias.
          </p>
        </div>
      </div>
    </div>
  );
}
