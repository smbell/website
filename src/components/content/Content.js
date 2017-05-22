import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';

import Home from '../home/Home';
import Blog from '../blog/Blog';
import About from '../about/About';
import NotFound from '../notfound/NotFound';

class Content extends Component {
  render() {
    return (
      <div className="content">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/blog' component={Blog}/>
          <Route path='/about' component={About}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    )
  }
}

export default Content;