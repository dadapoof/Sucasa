/* David Massart
 * NavBar.jsx
 * A navigation bar is great to store easy links to pages of your website.
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
    <div>
      <header>
        <div class="test">
          <ul id="headerButtons">
          <li className="LogoButton"><Link to="" style={{ textDecoration: 'none', color: 'white' }} className="subnav_link">SC</Link></li>
          <li className="navButton"><Link to="" style={{ textDecoration: 'none', color: 'white' }} className="subnav_link">Home</Link></li>
          <li className="navButton"><Link to="" style={{ textDecoration: 'none', color: 'white' }} className="subnav_link">What to Expect</Link></li>
          <li className="navButton"><Link to="" style={{ textDecoration: 'none', color: 'white' }} className="subnav_link">Amenities</Link></li>
          <li className="navButton"><Link to="" style={{ textDecoration: 'none', color: 'white' }} className="subnav_link">Around the Area</Link></li>
          <li className="navButton"><Link to="" style={{ textDecoration: 'none', color: 'white' }} className="subnav_link">Gallery</Link></li>
          <li className="navButton"><Link to="" style={{ textDecoration: 'none', color: 'white' }} className="subnav_link">Contact</Link></li>
        </ul>
       </div>
      </header>
      <h1 class="centered-text-image">SuCasa<br />2 Bedroom Flat in Hamilton Heights</h1>
	      <div id="left-animation" class="slideLeft">
	     	<h2>"Very classy apartment. Hosts are delightful!"</h2>
		</div>
    </div>
    );
  }
}
export default NavBar;