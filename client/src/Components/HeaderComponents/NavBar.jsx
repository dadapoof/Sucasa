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
        <ul id="headerButtons">
          <li className="LogoButton"><Link to="">SC</Link></li>
          <li className="navButton"><Link to="">Home</Link></li>
          <li className="navButton"><Link to="">What to Expect</Link></li>
          <li className="navButton"><Link to="">Amenities</Link></li>
          <li className="navButton"><Link to="">Around the area</Link></li>
          <li className="navButton"><Link to="">Gallery</Link></li>
          <li className="navButton"><Link to="">Contact</Link></li>
        </ul>
      </header>
      <h1 class="centered-text-image">SuCasa</h1>
    </div>
    );
  }
}
export default NavBar;