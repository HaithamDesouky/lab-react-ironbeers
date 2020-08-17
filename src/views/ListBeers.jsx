import React, { Component } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import HomeButton from '../components/HomeButton';
import { loadBeers } from './../services/beersApi';
import './ListBeers.css';

export class ListBeers extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      loaded: false,
    };
  }

  componentDidMount() {
    loadBeers()
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
    return (
      <div>
        <HomeButton></HomeButton>

        <div className="box-container">
          {this.state.loaded &&
            this.state.data.map((beers) => (
              <div key={beers._id} className="boxes all-beers-single">
                <Link to={`/beers/${beers._id}`}>
                  <div className="beer-img">
                    <img src={beers.image_url} alt="" />
                  </div>
                </Link>
                <div className="beer-text">
                  <h3>{beers.name}</h3>
                  <h4>{beers.tagline}</h4>
                  <p>
                    <strong>Created by </strong>
                    {beers.contributed_by}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default ListBeers;
