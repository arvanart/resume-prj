import React, {Component} from 'react';
import data from '../data.json';
import Fullpage from '../components/Fullpage';
import SkillCard from '../components/SkillCard';
import UpIcon from '../components/UpIcon';
import { Link, Element } from 'react-scroll';
import './SkillSection.css';

class SkillSection extends Component{
    render(){
        return(
          <div className="section">
          <Fullpage className="third"  background={this.props.background}>
            <h3>
              {data.sections[1].title}
            </h3>
            <div className="card-wrapper">
              {data.sections[1].items.map(eachskill =>{
                return(
                  <SkillCard skill = {eachskill} />
                );                
              })}              
            </div>
          </Fullpage>
            <Link activeClass="active" to="title" spy={true} smooth={true} offset={50} duration={500} delay={100}>         
              <UpIcon icon={data.icons.down} />
            </Link>              
          </div>
        )
    }
}

export default SkillSection