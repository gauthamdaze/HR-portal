import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import axios from 'axios';
import Team from './team/team';
import Add from './add/add';
import InfiniteScroll from 'react-infinite-scroller';
import ReactCardFlip from 'react-card-flip';
//import asset-1.json from '.Assets';
class App extends Component {
  componentDidMount () {
    axios.get('C:\Users\Gautham\my-app\src\Assets\asset-1.json', {
 headers: {
     'Content-Type': 'application/json',
     "Csrf-Token": "nocheck"
   },
  withCredentials: true,
      credentials: 'same-origin',
    },

	)
    .then(response=>{console.log(response);})
  }
  state = {
    persons: [
      { emp:"Gautham",id: '1', name: 'ui', age: 28 ,gen:'M'},
      { emp:"abc",id: '2', name: 'backend', age: 29,gen:'F' },
      { emp:"cbs",id: '3', name: 'api', age: 26 ,gen:'M'},
      { emp:"abc",id: '4', name: 'backend', age: 29,gen:'M' },
      { emp:"cbs",id: '5', name: 'api', age: 26,gen:'F' },    { emp:"abc",id: '6', name: 'backend', age: 29,gen:'M' },
  ],
    team :[{Team_name:"UI",Lead:"xyz",size:10},
  {Team_name:"Backend",Lead:"xyz",size:5},
{Team_name:"HR",Lead:"xyz",size:2},
{Team_name:"Q/A",Lead:"xyz",size:6},
{Team_name:"Data",Lead:"xyz",size:8},
{Team_name:"API",Lead:"xyz",size:15}],
    otherState: 'some other value',
    showPersons: false,
    showteam:false,
    showadd:false,
    isFlipped: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 3);
    this.setState({persons: persons});
  }
  editPersonHandler=(e,index)=>{
    this.state.persons[index]['emp']=e.target.value;
    this.setState({persons:this.state.persons});
  }
  editPerson_ageHandler=(e,index)=>{
    this.state.persons[index]['age']=e.target.value;
    this.setState({persons:this.state.persons});
  }
  editPerson_DESHandler=(e,index)=>{
    this.state.persons[index]['name']=e.target.value;
    this.setState({persons:this.state.persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow, showteam:false,showadd:false } );
  }
  toggleteam =() => {
    const x =this.state.showteam;
    this.setState({showteam: !x, showPersons:false,showadd:false});
  }
  addmember =() => {
    const y =this.state.showadd;
    this.setState({showadd:!y,showPersons:false,showteam:false});
  }
  update = (event) => {
  this.state.persons.push(event);
  this.setState({
    persons: this.state.persons,
    showadd:false,
    showPersons:true
  })
   }
render () {

//personns
    let persons = null;

    if ( this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (<Person
              click={() => this.deletePersonHandler(index)}
              edit={(event)=>this.editPersonHandler(event,index)}
              edit_age={(event)=>this.editPerson_ageHandler(event,index)}
              edit_DES={(event)=>this.editPerson_DESHandler(event,index)}
              emp={person.emp}
              name={person.name}
              age={person.age}
              gen={person.gen}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />);
            })}
        </div>
      );
    }
//teams
let teams =null;
if(this.state.showteam){
  teams=(
    <div>
    {this.state.team.map((team)=>{
    return  <Team
  team_name={team.Team_name}
    lead={team.Lead}
   size ={team.size}/>
 })
}
   </div>
  );
}
//addmember
let adds =null;
if(this.state.showadd){
adds = (
  <Add u={this.update} />);
}
    return (
      <div className="App">
        <h1> <i className="fas fa-paw"></i>        HR Portal</h1>
        <p> Have Good Day</p>
        <div id="btn">
        <button className="btn"
          onClick={this.togglePersonsHandler}> <i class="fas fa-address-book"></i> Members</button>
            <button onClick={this.toggleteam}> <i class="fas fa-users"></i>Teams</button>
<button onClick={this.addmember}><i class="fas fa-plus-circle"></i>Add User</button>
    <div>{persons}
</div>
  {teams}
  {adds}
</div>
    </div>
    );
  }
}

export default (App);
