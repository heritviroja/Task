import React, { Component } from 'react';

class reuasble extends Component {
    render() {
        return (
            <>
                <div className="card">
          
          <img src={this.props.imgSrc} alt="Lights" className="card-img-top" />
          <div class="caption">
              <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
          </div>
      
      </div>
            </>
        );
    }
}

export default reuasble;