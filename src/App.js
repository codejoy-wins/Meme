import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      topText: "",
      bottomText: "",
      randomImg: "https://clutchpoints.com/wp-content/uploads/2019/07/Should-you-trust-Jarvis-Landry-still-with-Odell-Beckham-Jr.-on-his-team.jpg", // initialize with something
      color: ""
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
        <header>
        <h2>Create your own meme</h2>
        </header>
        <main>
          <form>
            <input name="topText" onChange={this.handleChange} placeholder="Top Text"/>
            <input name="bottomText" onChange={this.handleChange}  placeholder="Bottom Text"/>
            <select onChange={this.handleChange} name="color">
              <option value="">--Select a color--</option>
              <option value="blue">Blue</option>
              <option value="pink">Pink</option>
              <option value="red">Red</option>
              <option value="orange">Orange</option>
              <option value="plum">Plum</option>
              <option value="coral">Coral</option>
              <option value="firebrick">Firebrick</option>
              <option value="gold">Gold</option>
              <option value="skyblue">Sky Blue</option>
              <option value="deeppink">Deep Pink</option>
              <option value="gray">Gray</option>
              <option value="silver">Silver</option>
              <option value="green">Green</option>
              <option value="greenyellow">Green Yellow</option>
              <option value="forestgreen">Forest Green</option>
              <option value="whitesmoke">White Smoke</option>
            </select>
            <textarea onChange={this.handleChange} name="randomImg" cols="50" placeholder="Open an image on the web in a new tab and copy and paste the url here"/>
          </form>
          <h1 style={{color: this.state.color}}>{this.state.topText}</h1>
          <img style={{maxWidth: "800px" }} alt="Open image on the web in a new tab and copy and paste the url here" className="widify" src={this.state.randomImg}></img>
          <h1 style={{color: this.state.color}}>{this.state.bottomText}</h1>
        </main>
        <footer>
          <a href="https://maxjann.com">Jann Software</a>
        </footer>
        
      </div>
    )
  }
}

export default App;
