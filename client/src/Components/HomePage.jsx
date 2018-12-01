/* David Massart
 * HomePage.jsx
 * This component is the homepage
 */

import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
   	  <div class="container">
   	   <div class="test">
        <ul id="headerButtons">
          <li className="LogoButton"><Link to="" style={{ textDecoration: 'none', color: 'white' }} className="subnav_link">SC</Link></li>
          <li className="navButton"><Link to="" style={{ textDecoration: 'none', color: 'white' }} className="subnav_link">Home</Link></li>
          <li className="navButton"><Link to="" style={{ textDecoration: 'none', color: 'white' }} className="subnav_link">What to Expect</Link></li>
          <li className="navButton"><Link to="" style={{ textDecoration: 'none', color: 'white' }} className="subnav_link">Amenities</Link></li>
          <li className="navButton"><Link to="" style={{ textDecoration: 'none', color: 'white' }} className="subnav_link">Around the area</Link></li>
          <li className="navButton"><Link to="" style={{ textDecoration: 'none', color: 'white' }} className="subnav_link">Gallery</Link></li>
          <li className="navButton"><Link to="" style={{ textDecoration: 'none', color: 'white' }} className="subnav_link">Contact</Link></li>
        </ul>
       </div>
      <div class="details">
        <h1>What to expect:</h1>

      </div>
      <div class="amenities">
      	<h1>Amenities</h1>
      </div>
      <div class="map">
      	<h1>What's around the area?</h1>
      </div>
      <div class="photo-gallery">
      	<h1>Gallery</h1>
      </div>
      </div>
    )
  }
}
export default HomePage;