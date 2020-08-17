import React from 'react';

export default function (props) {
  let beer = props.beer;
  return (
    <div>
      <div className="box-container">
        {this.state.loaded && (
          <div className="boxes">
            <img
              src={beer.image_url}
              alt="ListOfBeers"
              className="single-beer"
            />

            <div className="separated">
              <h3>{beer.name}</h3> <h5>{beer.attenuation_level}</h5>
            </div>
            <div className="separated">
              <h4>{beer.tagline}</h4> <h4>{beer.first_brewed}</h4>
            </div>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
          </div>
        )}
      </div>
    </div>
  );
}
