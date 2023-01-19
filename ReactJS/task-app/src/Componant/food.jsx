import React, { Component } from 'react';


class food extends Component { 
    constructor(props){
        super(props)
        this.state ={
            imgSrc : ""
            
        }
    }  
    changeImg=()=>{
        this.setState({imgSrc:"images/breakfast.jpg"})
    }  
    changeLmg=()=>{
        this.setState({imgSrc:"images/lunch.jpg"})
    } 
    changeNmg=()=>{
        this.setState({imgSrc:"images/dinner.jpg"})
    } 
    render() {
        return (
            <>
              
              <div className="container-fluid">
                     <div className="row">
                            <div className="col-2">
                                <div className="btn-group-vertical " >
                                <button className="btn btn-outline-primary mt-3 ms-3 me-3 btn-lg" onClick={this.changeImg} >BreakFast</button> 
                                <button className="btn btn-outline-danger mt-2 ms-3 me-3 btn-lg" onClick={this.changeLmg}> Lunch</button> 
                                <button className="btn btn-outline-success mt-2 ms-3 me-3 btn-lg" onClick={this.changeNmg}> Dinner</button>
                                </div>
                            </div>
                            <div className="col-8 mt-3">
                            <img src={this.state.imgSrc} alt="" className="card-img-top rounded box-shadow-sm"/>
    </div>
    
  </div>
</div>
                    
                    
                
                               
              </>
        );
    }
}

export default food;