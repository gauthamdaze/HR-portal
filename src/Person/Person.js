 import React from 'react';
 import "./Person.css"

const person = (props) =>{
  return (

<div  className ="Person">
  <div className="front">

    <div id="img_div">
            <i className="fas fa-user-circle"></i>
            </div><br />
     <p id ="a1">
     {props.emp}
     </p>
     <div id ='description'>
              AGE: {props.age}, {props.gen}<br  /><br />
              currently working on {props.name} and <br />
              description about the person this is just a dummy text for the testing ...............................................<br />
              happy hours!!
      </div><br />
    <div  id="actionbar">
      <div id="edit_btn" onClick={props.edit}><i className="fas fa-user-edit"></i></div>
      <div id ="delete_btn" onClick={props.click}><i className="fas fa-window-close"></i></div>
      </div>
    </div>

  <div className="rear">
  <div id="edit_form">
<form label="edit"><br />
Enter name               :  <input type='text' onChange={props.edit} value={props.emp}/><br />
Enter Age                :  <input type='text' onChange={props.edit_age} value={props.age}/><br />
Enter description        :  <input type='text' onChange={props.edit_DES} value={props.name}/><br />

</form>
  <button type="submit"onClick>UPDATE</button>
  </div>
  </div>

</div>

      );
};
export default person;
