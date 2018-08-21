import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      menuShow: false,
      animation: false
    };
  }

  showMenu() {
    this.setState({
      menuShow: !this.state.menuShow
    });
  }

  toggleAnimation() {
    this.setState({
      animation: !this.state.animation
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header>
          <section>
            <h2>Start Bootstrap</h2>
            <div className="hamburger" onClick={() => this.showMenu()}>

              <div className="bun">
                Menu
              </div>

              <div className='burger'>
                <div className='bur'></div>
                <div className='bur'></div>
                <div className='bur'></div>
              </div>
            </div>

            <nav>
              <li>SERVICES</li>
              <li>PORTPOLIO</li>
              <li>ABOUT</li>
              <li>TEAM</li>
              <li>CONTACT</li>
            </nav>
          </section>
        </header>
        <div
          className={(this.state.menuShow ? "dropDownShow" : "") + " dropDown"}
        >
          <ul>
            <li>SERVICES</li>
            <li>PORTFOLIO</li>
            <li>ABOUT</li>
            <li>TEAM</li>
            <li>CONTACT</li>
          </ul>
        </div>

        <div
          className={(this.state.animation ? "playing" : "") + " cubeToBall"}
        >
          TELL ME MORE
        </div>
        {/* <button onClick={() => this.toggleAnimation()}>Run</button> */}
      </div>
    );
  }
}

export default App;
