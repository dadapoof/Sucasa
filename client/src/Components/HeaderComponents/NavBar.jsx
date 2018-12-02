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
          <li className="LogoButton"><Link to="" style={{ textDecoration: 'none', color: 'white' }}>SC</Link></li>
          <li className="navButton"><Link to="" className="link">Home</Link></li>
          <li className="navButton"><Link to="" className="link">What to Expect</Link></li>
          <li className="navButton"><Link to="" className="link">Amenities</Link></li>
          <li className="navButton"><Link to="" className="link">Around the Area</Link></li>
          <li className="navButton"><Link to="" className="link">Gallery</Link></li>
          <li className="navButton"><Link to="" className="link">Contact</Link></li>
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