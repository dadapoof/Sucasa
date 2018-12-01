/* David Massart
 * App.jsx
 * This component will store the routes for the various routes that you will use to navigate your website.
 */

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import NavBar from './HeaderComponents/NavBar';
import Footer from './FooterComponents/Footer';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
	        <ul>
	          <li>
	            <Link to="/"></Link>
	          </li>
	          <li>
	            <Link to="/HeaderComponents/NavBar.jsx"></Link>
	          </li>
	          <li>
	            <Link to="/FooterComponents/Footer.jsx"></Link>
	          </li>
	        </ul>

	        <hr />


          <Route name="home" exact path="/" component={HomePage} />
          <Route name="nav" exact path="/HeaderComponents/NavBar.jsx" component={NavBar} />
          <Route name="footer" exact path="/FooterComponents/Footer.jsx" component={Footer} />
        </div>
      </Router>
    );
  }
}
export default App;