/* David Massart
 * NavBar.jsx
 * A navigation bar is great to store easy links to pages of your website.
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
  	function hover(e) {
	    e.setState({color: 'rgba(0, 0, 0, 0.6)'});
  	}
    return (
    <div>
      <header>
        <div class="test">
          <ul id="headerButtons">
          <li className="LogoButton"><Link to="" style={{ textDecoration: 'none', color: 'white' }} onClick=(hover) className="subnav_link">SC</Link></li>
          <li className="navButton"><Link to="" style={{ textDecoration: 'none', color: 'white' }} className="subnav_link">Home</Link></li>
          <li className="navButton"><Link to="" style={{ textDecoration: 'none', color: 'white' }} className="subnav_link">What to Expect</Link></li>
          <li className="navButton"><Link to="" style={{ textDecoration: 'none', color: 'white' }} className="subnav_link">Amenities</Link></li>
          <li className="navButton"><Link to="" style={{ textDecoration: 'none', color: 'white' }} className="subnav_link">Around the Area</Link></li>
          <li className="navButton"><Link to="" style={{ textDecoration: 'none', color: 'white' }} className="subnav_link">Gallery</Link></li>
          <li className="navButton"><Link to="" style={{ textDecoration: 'none', color: 'white' }} className="subnav_link">Contact</Link></li>
        </ul>
       </div>
      </header>
      <h2 id="left-animation" class="slideLeft">"Very classy apartment.<br />Hosts are delightful!"</h2>
      <h1 class="centered-text-image">SuCasa</h1>
      <h2 class="centered-text-image-2">2 Bedroom Flat in Hamilton Heights</h2>
    </div>
    );
  }
}
export default NavBar;