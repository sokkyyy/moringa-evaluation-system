import React from 'react';
import user from './user.svg'

const Sidecard = () => {
  return(
   
  
    <div class="card testimonial-card">
    

      <div class="card-up red lighten-1">


      </div>
    
    
      <div class="avatar mx-auto white">
        <img src={user} id="user-dp" alt="user-dp" heigh="80px" width="80px"/>
      </div>
    
     
      <div class="card-body">
       
        <h4 class="card-title">Anna Doe</h4>
        <hr></hr>
       
        <p><i class="fas fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisci</p>
      </div>
    
    </div>
  
   
  )
   


}

export default Sidecard