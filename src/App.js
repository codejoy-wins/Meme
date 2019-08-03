import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      topText: "",
      bottomText: "",
      randomImg: "https://clutchpoints.com/wp-content/uploads/2019/07/Should-you-trust-Jarvis-Landry-still-with-Odell-Beckham-Jr.-on-his-team.jpg", // initialize with something
    }
    this.handleChange=this.handleChange.bind(this)
  }

  handleChange(event){
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  render(){
    return (
      <div className="App">
        <form>
          <input name="topText" onChange={this.handleChange} placeholder="Top Text"/>
          <input name="bottomText" onChange={this.handleChange}  placeholder="Bottom Text"/>

        </form>

        <h1>{this.state.topText}</h1>
        <img alt="fuck" className="widify" src={this.state.randomImg}></img>
        <h1>{this.state.bottomText}</h1>
        <a href="https://maxjann.com">Jann Software</a>
      </div>
    )
  }
}

export default App;
