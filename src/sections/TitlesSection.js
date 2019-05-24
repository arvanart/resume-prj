import React, {Component} from 'react';
import data from '../data.json';
import Fullpage from '../components/Fullpage';
import DownIcon from '../components/DownIcon';
import { SocialIcon } from 'react-social-icons';
import './TitlesSection.css';
import { Link, Element } from 'react-scroll';


class TitlesSection extends Component{
    constructor(){
      super()
      this.state ={
        color:'#fff'
      }
      this.changeColor = this.changeColor.bind(this)  
    }
    
    changeColor() {
      this.setState({
        color: this.state.color === "#fff" ? 'yellow' :'#fff'
      })
    }

    render(){
      return(
        <div className="section">
            <Element name="title" className="element"></Element>  
            <Fullpage className="first"  background={this.props.background}>           
              <h1 className="title"
                style={
                  {color:this.state.color}
                }
                onMouseOver = {this.changeColor}
                onMouseLeave ={this.changeColor}
              >
                {data.title}
              </h1>
              <h2>
                {data.subtitle}
              </h2>
              <div>
                {
                  Object.keys(data.links).map(key =>{
                    return(
                      <SocialIcon url={data.links[key]} />
                    )
                  })
                }
              </div>             
            </Fullpage>
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} delay={100}>         
              <DownIcon icon={data.icons.down} />
            </Link>
            <Element name="about" className="element">
            </Element>
          </div>
        );
    }
}

export default TitlesSection;