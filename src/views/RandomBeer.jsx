import React, { Component } from 'react';
import HomeButton from '../components/HomeButton';
import { loadRandomBeer } from './../services/beersApi';
import IndividualBeer from '../components/IndividualBeer';

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
          {this.state.loaded && <IndividualBeer beer={beer} />}
        </div>
      </div>
    );
  }
}
