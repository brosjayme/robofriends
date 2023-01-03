import React,{ Component } from "react";
import Cardlist from "../components/Cardlist";
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll';
import './app.css';

class App extends Component{
    constructor() {
        super()
        this.state={
            robot: [],
            searchfield: ''
        }
    }


componentDidMount(){
    fetch('https://jsonplaceholder.cypress.io/users')
  .then(response => response.json())
  .then(users =>  {this.setState({robot: users})});
}


 onsearchChange=(event)=>{
    this.setState({searchfield: event.target.value})
 }
      
 render() {
    const filteredRobot= this.state.robot.filter(robot =>{
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
     })
    if(this.state.robot.length === 0){
        return <h1>Loading</h1>
    } else{
        return (
            <div className="tc">
                <h1 className="f2 green">RoboFriends</h1>
                <SearchBox searchChange={ this.onsearchChange }/>
                <Scroll>
                  <Cardlist robot ={filteredRobot}/>
                </Scroll>
            </div> 
        );
    }

  }
}
export default App;