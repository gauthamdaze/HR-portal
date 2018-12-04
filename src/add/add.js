import React, { Component } from 'react';
//import React from 'react';
import "./add.css"

class Add extends Component {

state = {
  empData: {
    emp:'',
    age:'',
    gen:'',
    name:'',


  }
};

doWork = () =>{
  let obj = {emp: this.refs.empName.value, age:this.refs.empAge.value,gen:this.refs.empGen.value, name:this.refs.empTeam.value};
  this.state.empData = obj;
  this.setState({
    empData:this.state.empData
  });
  this.props.u(this.state.empData);
}
  render () {
    return (
<div  className="add">
<br />
 Enter Name              :<input type ="text" placeholder=" NAME" ref = "empName"/><br /> <br />
 Enter AGE               :<input type ="text" placeholder="age" ref="empAge"/><br /><br />
 Enter Gender            :<input type="text" placeholder='M/F' ref="empGen"/>< br /><br />
 Enter description       :<textarea rows="4" cols="50" placeholder="description"ref="empTeam"/><br />
 <br />


 <button id="submit_btn" type="submit" onClick={this.doWork}><i class="fas fa-hand-point-right"></i>  SUBMIT</button>
</div>
);



}
}

export default Add;
