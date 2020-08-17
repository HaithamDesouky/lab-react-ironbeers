import React, { Component } from 'react';
import HomeButton from '../components/HomeButton';
import { loadSingleBeer } from './../services/beersApi';
import './SingleBeer.css';

export default class ListBeers extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      loaded: false,
    };
  }

  componentDidMount() {
    loadSingleBeer(this.props.match.params.id)
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

//  let beer = this.state.data;
//     return (
//       <div>
//         <HomeButton></HomeButton>

//         <div className="box-container">
//           {this.state.loaded && (
//             <div className="boxes all-beers-single">
//               <div className="beer-img">
//                 {' '}
//                 <Link to={`/beers/${beer._id}`}>
//                   <img src={beer.image_url} alt="" />
//                 </Link>
//               </div>

//               <div className="beer-text">
//                 <Link to={`/beers/${beer._id}`}>
//                   <h3>{beer.name}</h3>
//                 </Link>
//                 <h4>{beer.tagline}</h4>
//                 <p>
//                   <strong>Created by </strong>
//                   {beer.contributed_by}
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>
