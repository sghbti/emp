import React ,{Component}from 'react'
import CommonHeader from './CommonHeader';

class Task extends Component{
  constructor(props)
   {
     super(props);
        this.state={
        
      }
   }

   render()
    {
        return(
           <div className="TaskContainer">     
             <div className="CreateTaskHeader">
               <CommonHeader  compPassed={"Users"} con={this.props.con}/>
                 </div>
              <div className="CreateTaskBody">
                  
                   </div>
          </div>
     )

  
      }

}