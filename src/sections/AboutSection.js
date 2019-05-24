import React, {Component} from 'react';
import Fullpage from '../components/Fullpage';
import DownIcon from '../components/DownIcon';
import { Link, Element } from 'react-scroll';
import data from '../data.json';
import './AboutSection.css'

class AboutSection extends Component{
    render(){
        return(
          <div className="section">
            <Fullpage className="second" background={this.props.background}>
              <h3>
                {data.sections[0].title}
              </h3>
              <div className="paragraphs">
                {data.sections[0].items.map(p =>{
                  return <p>{p.content}</p>;
                })}
              </div>
            </Fullpage>
            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500} delay={100}>         
              <DownIcon 
                icon={data.icons.down}
              />
            </Link>
            <Element name="skills" className="element"> </Element>
          </div>
        );
    }
}

export default AboutSection