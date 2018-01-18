import React, { Component } from "react";
import "./Coffee.css";
import Logo from "./Logo";
import Cup from "./Cup";
import coffee from "./coffee.png";
import noCoffee from "./no-coffee.png";

class Coffee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coffee: 'no',
      logo: 'starbucks',
      cup: 'white'
    };
    this.handleCoffeeChange = this.handleCoffeeChange.bind(this);
    this.handleLogoChange = this.handleLogoChange.bind(this);
    this.handleCupChange = this.handleCupChange.bind(this);
  }

  handleCoffeeChange(event) {
    this.setState({ coffee: event.target.value });
  }
  handleLogoChange(event) {
    this.setState({ logo: event.target.value });
  }
  handleCupChange(event) {
    this.setState({ cup: event.target.value });
  }

  render() {
    return (
      <div className="coffee">

        {/* TEST */}
        <div style={{backgroundColor:'pink', marginRight:'50px', padding:'10px', width:'105px'}}>
          <u><b>STATE</b></u><br/><br/>
          {this.state.coffee}<br/><br/>
          {this.state.logo}<br/><br/>
          {this.state.cup}
        </div>

        { /* ------------------------------------------------------------ */ }

        <div className="col coffee-show">

          <img src={coffee} alt="Coffee" className="coffee-img" />

          { this.state.coffee === "no" ? <img src={noCoffee} alt="No Coffee" className="white-ellipse" /> : null }

          {/* TEST */}
          <div style={{backgroundColor:'rgb(128, 214, 201)', marginTop:'30px', padding:'10px'}}>
            <u><b>PROPS</b></u><br/><br/>
            <Logo brand={this.state.logo} /> {/* Send props to Child Component */}<br/>
            <Cup color={this.state.cup} /> {/* Send props to Child Component */}
          </div>

        </div>

        { /* ------------------------------------------------------------ */ }

        <div className="col coffee-select">
          <label>
            Coffee ? : {"  "}
            <select value={this.state.coffee} onChange={this.handleCoffeeChange}>
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </label><br />

          <label>
            Logo : {"  "}
            <select value={this.state.logo} onChange={this.handleLogoChange}>
              <option value="starbucks">Starbucks</option>
              <option value="coffeeworld">Coffee World</option>
            </select>
          </label><br />

          <label>
            Cup color : {"  "}
            <select value={this.state.cup} onChange={this.handleCupChange}>
              <option value="white">White</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </select>
          </label><br />
        </div>

      </div>
    );
  }
}

export default Coffee;
