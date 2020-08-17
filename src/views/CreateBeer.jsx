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

    const newBeer = {
      name: event.target.name.value,
      tagline: event.target.tagline.value,
      description: event.target.description.value,
      first_brewed: event.target.first_brewed.value,
      brewers_tips: event.target.brewers_tips.value,
      attenuation_level: Number(event.target.attenuation_level.value),
      contributed_by: event.target.contributed_by.value,
    };

    addNewBeer(newBeer)
      .then((message) => {
        console.log(message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <div className="box-container">
          <h1>Create a beer</h1>
          <form onSubmit={this.addBeer} method="post">
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
