import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Book extends Component {
    state={
        hide: "hidden"
    }
    hidebook = ()=>{
        if(this.state.hide === 'false'){
            this.setState({hide:'hidden'})
        }else{
            this.setState({hide:'false'})
        }
    }
  render() {
    return (
        <div>
            <h1 onClick={this.hideBook}>{this.props.meme.title}</h1> 
            

          </div> 
    
    );
  }
}

export default Book;
