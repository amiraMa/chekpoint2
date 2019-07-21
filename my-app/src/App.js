import React,{Component} from 'react';
import team1  from './images/team1.jpg';
import team2  from './images/team2.jpg';
import team3  from './images/team3.jpg';
import './App.css';

class App extends Component {
  render(){
  return (
    <div className="home">
    <div className="include">
    <h1 className="title">Our Team</h1>
    <div className="Groupimage">
    <div>
    <img src={team1} alt="" className="image"></img>
    <h2 className="titleImage">Caroline Fernandez</h2>
    <h3 className="title2">Founder CEO</h3>
    </div>
    <div>
    <img src={team2} alt="" className="image"></img>
    <h2 className="titleImage">Jack Fernando</h2>
    <h3 className="title2">Founder CEO</h3>
    </div>
    <div>
    <img src={team3} alt="" className="image"></img>
    <h2 className="titleImage"> Asher Fernandez</h2>
    <h3 className="title2">Full Time Programmer Manager</h3>
    </div>
    
    </div>
    </div>
    </div>
  );
}
}
export default App;
