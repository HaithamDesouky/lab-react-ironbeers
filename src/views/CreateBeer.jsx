import React from 'react';
import { addNewBeer } from './../services/beersApi';

export default class CreateBeer extends React.Component {
  constructor() {
    super();
    this.state = {
      newBeer: {
        name: null,
        tagline: null,
        description: null,
        first_brewed: null,
        brewers_tips: null,
        attenuation_level: null,
        contributed_by: null,
      },
    };
  }

  addBeer = (event) => {
    event.preventDefault();
    console.log(this.state.newBeer);
    addNewBeer(this.state.newBeer)
      .then((message) => {
        console.log(message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  changeVals = (event) => {
    event.preventDefault();
    const property = event.target.name;
    const value = event.target.value;

    console.log(property, value);

    this.setState({
      newBeer: {
        [property]: value,
      },
    });
    console.log(this.state.newBeer);
  };

  render() {
    return (
      <div>
        <div className="box-container">
          <h1>Create a beer</h1>
          <form
            onChange={this.changeVals}
            onSubmit={this.addBeer}
            method="post"
          >
            <label htmlFor="name">Name</label>
            <input required type="text" name="name" />
            <label required htmlFor="tagline">
              Tagline
            </label>
            <input type="text" name="tagline" />
            <label htmlFor="description">Description</label>
            <textarea name="description" id="" cols="30" rows="10"></textarea>
            <label htmlFor="first_brewed">firstbrewed</label>
            <input name="first_brewed" id="" />
            <label htmlFor="brewerstips">brewerstips</label>
            <input name="brewers_tips" id="" />
            <label htmlFor="attenuation_level">attentuationlevel</label>
            <input name="attenuation_level" id="" type="number" />
            <label htmlFor="contributed_by">contributed_by</label>
            <input name="contributed_by" id="" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
