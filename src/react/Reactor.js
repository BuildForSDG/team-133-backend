import React, { Component } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import './animate'
import './scss/main.scss';
import './scss/pages.scss';

import TransportItems from './page/TransportItems';
import TransportDetails from './page/TransportDetails';
import Api from './page/Api';
import NotFound from './page/NotFound';
import Home from './page/Home';
import NavBar from './component/NavBar';
import User from "./page/User";
import About from "./page/About";
import AddItem from "./page/AddItem";
import Forum from "./page/Forum";
import Footer from "./component/common/footer"
import Tv from "./page/farmersTv"
class Reactor extends Component {

  homePage = () => {
    return <Redirect to="/"/>
  }

  render() {
    return (
      <div id="home" className="body">
        
          
          <NavBar/>
        
        <Switch>
        <Route path="/tv" component={Tv}/>
          <Route path="/transport/:id" component={TransportDetails}/>
          <Route path="/transport-list/:filter?/:filtertwo?" component={TransportItems}/>
          <Route path="/transport-api" component={Api}/>
          <Route path="/about" component={About}/>
          <Route path="/forum" component={Forum}/>
          <Route path="/add-item" component={AddItem}/>
          <Route path="/user" component={User}/>
          <Route path="/not-found" component={NotFound}/>
          <Route path="/" component={Home}/>
          <Redirect to="/not-found" />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Reactor;
