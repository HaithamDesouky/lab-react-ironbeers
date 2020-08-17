import React, { Component } from 'react';
import HomeButton from '../components/HomeButton';
import { loadRandomBeer } from './../services/beersApi';
import './SingleBeer.css';

export default class RandomBeer extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      loaded: false,
    };
  }

  componentDidMount() {
    loadRandomBeer(this.props.match.params.id)
      .then((data) => {
        this.setState({
          data,
          loaded: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    console.log(this.state);
    let beer = this.state.data;
    return (
      <div>
        <HomeButton></HomeButton>
        <h3>Random Beer</h3>

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
}
