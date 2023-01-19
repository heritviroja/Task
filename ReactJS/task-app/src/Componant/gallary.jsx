import React, { Component } from 'react';
import Reuasble from './reuasble';

class gallary extends Component {
    render() {
        return (
            <>
              <div class="container">
  
                  <div class="row">
                  <div class="col-md-4">
                      <Reuasble imgSrc="images/lights.jpg"/>
                  </div>
                  <div class="col-md-4">
                      <Reuasble imgSrc="images/nature.jpg"/>
                  </div>
                  <div class="col-md-4">
                      <Reuasble imgSrc="images/fjords.jpg"/>
                  </div>
                  </div>
            </div>
  
            </>
        );
    }
}

export default gallary;