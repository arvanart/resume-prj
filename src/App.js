import React, { Component } from 'react';

import TitlesSection from './sections/TitlesSection'
import AboutSection from './sections/AboutSection'
import SkillSection from './sections/SkillSection'

import { Link, Element } from 'react-scroll';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      background_01: "#00a0af",
      background_02: "#3fb9c4",
      background_03: "#a5dfe4"
    };
    this.changeColor = this.changeColor.bind(this)  
  }
  changeColor() {
    this.setState({
      background_01: this.state.background_01 === "#00a0af" ? '#ff7800' :'#00a0af',
      background_02: this.state.background_02 === "#3fb9c4" ? '#ff9a40' :'#3fb9c4',
      background_03: this.state.background_03 === "#a5dfe4" ? '#ffb573' :'#a5dfe4'
    })
  }

  render() {    
    return (
     <div className="App">

          <div className="navigation">
              <div className="setting">              
                <div onClick={this.changeColor}>
                  Theme Color
                </div>
              </div> 
              <div className="nav">
                <Link activeClass="active" to="title" spy={true} smooth={true} offset={50} duration={500} delay={100}>         
                  Title
                </Link>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} delay={100}>         
                  About
                </Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500} delay={100}>         
                  Skills
                </Link> 
              </div>                           
          </div>
          <TitlesSection 
            color={this.state.color}
            background={this.state.background_01}
          />
          <AboutSection
            color={this.state.color}
            background={this.state.background_02}
          />
          <SkillSection
            color={this.state.color}
            background={this.state.background_03}
          />
        
      </div>
    );
  }
}

export default App;
