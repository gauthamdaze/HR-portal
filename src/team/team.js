
import React from 'react';
import "./team.css"

const Team = (props)=>{

  return(
<div  className="team">
<div id="img_div1">
  <i class="fas fa-star"></i>

</div>
<br />
 {props.team_name}
 <br />
 {props.lead} <br />
 {props.size}


</div>
)}

export default Team;
