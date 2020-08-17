import React, { Component } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import HomeButton from '../components/HomeButton';
import { loadBeers } from './../services/beersApi';

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
    console.log(this.state.data);
    return (
      <div>
        <HomeButton></HomeButton>

        <div className="all-beers">
          {this.state.loaded &&
            this.state.data.map((beers) => <p>{beers.name}</p>)}
        </div>
      </div>
    );
  }
}

export default ListBeers;
