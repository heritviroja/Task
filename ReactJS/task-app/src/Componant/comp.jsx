import React, { Component } from 'react';


class comp extends Component {
    constructor(props){
        super(props)
        this.state ={
            imgSrc : "",
            c1: "nav-link h6",
            c2: "nav-link h6",
            c3: "nav-link h6"
            
        }
    }  
    changeImg=()=>{
        this.setState({imgSrc:"images/breakfast.jpg"})
        this.setState({c1 : "nav-link active h5",  c2 : "nav-link h6", c3 : "nav-link h6"})
    }  
    changeLmg=()=>{
        this.setState({imgSrc:"images/lunch.jpg"})
        this.setState({c2 : "nav-link active h5",  c1 : "nav-link h6", c3 : "nav-link h6"})
    } 
    changeNmg=()=>{
        this.setState({imgSrc:"images/dinner.jpg"})
        this.setState({c3 : "nav-link active h5", c1 : "nav-link h6", c2 : "nav-link h6"})
    } 
    render() {
        return (
            <>
               <div className="card text-center">
  <div className="card-header ">
    <ul className="nav  nav-tabs  card-header-tabs">
      <li className="nav-item">
        <span className={this.state.c1} aria-current="location" onClick={this.changeImg} >Breakfast</span>
      </li>
      <li className="nav-item">
        <span className={this.state.c2} aria-current="false"onClick={this.changeLmg} >Lunch</span>
      </li>
      <li className="nav-item">
        <span className={this.state.c3}   onClick={this.changeNmg} aria-current="true">Dinner</span>
      </li>
    </ul>
  </div>
  <div className="card-body ">
  <img src={this.state.imgSrc} alt="" className="card-img-top rounded box-shadow-sm"/>
  </div>
</div>
            </>
        );
    }
}

export default comp;