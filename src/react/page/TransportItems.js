
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import Loader from '../component/Loader';

const axios = require('axios')
let endpoint = window.location.host

const refineApiData = require('../../services/refineApiData')

class TransportItems extends Component {

  state = {
    items: []
  }


  loadData = async () => {

    const { data } = await refineApiData.getTransportItems('hello')
    //console.log(`${endpoint}/api/transport/`)

    //console.log(data);

    this.setState({
      items: data
    })
  }
  componentDidMount() {
    this.loadData()
  }

  renderItems = () => {
    const {items } = this.state

    if (!_.isEmpty(items)){
      return (
        <div id="content" className="content">
           <header className="masthead"> <h1> Transport Listing Page</h1>
          <div className="item-list">
            {
              items.map((item, index) => {
                //console.log(item)
                return(
                  <div key={item._id} className="item">
                    <h2>{ item.title}</h2>
                    <p>
                      {item.description}
                    </p>
                    <p>
                      {item.details}
                    </p>
                    <div>
                      <ul className="category_list"> <span className="name">Tags:</span>
                      {
                        item.categories.map(category => {
                          return <li key={category}>{category}</li>
                        })
                      }
                    </ul>
                  </div>
                    <Link to={`/transport/${item._id}`}>Read more... </Link>
                  </div>
                )
              })
            }
          </div></header>
         
        </div>
      )
    } else
      return (
        <Loader/>
      )
  }

  // display teasers
  render() {
    const {items } = this.state
    //console.log(items)
    return (
      <React.Fragment>
        {this.renderItems()}
      </React.Fragment>
    );
  }
}

export default TransportItems;
