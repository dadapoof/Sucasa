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
          <li className="navButton"><Link to="">Home</Link></li>
        </ul>
        <img src={require('/apartment.jpeg')} />
      </header>
    </div>
    );
  }
}
export default NavBar;