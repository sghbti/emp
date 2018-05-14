import React from 'react';
import { Switch, Route, Link} from 'react-router-dom';
import AddUser from './AddUser';
import Users from '../table/Table'

/*SideBar------------  list Elements   */
export function SideBarList(props){
    return(
        <ul>
               
                  <li><Link to={'/Users'}>Users</Link></li>
                  <li><Link to={'/Project'}>Projects</Link></li>
                  <li><Link to={'/Tasks'}>Tasks</Link></li>
                 

              </ul>
    )
}

/*SideBar-------------------  Routes of List Elements */

export function SideBarRoute(props){
    
    return(
        
               <Route  path='/:name' render={({match})=>{
                   if(match.params.name==='Users')
                   {
                       return <Users con={'Users'}/>
                   }
                   if(match.params.name==='Tasks'){
                    return <Users con={'Tasks'}/>
                   }
                   if(match.params.name==='Project'){
                    return <Users con={'Projects'}/>
                   }
                  return match.params.name
                   
                   
               } }/>
               
              
            
    )
}

/*Input Components */
export function Input(props){
    return(
        <div className="Inputlabels" >
        <label > {props.placeholderv }</label>
        <br/>
        <input  type={props.typev}
        placeholder={props.placeholderv}

        />
        </div>
    )
}

/*Button Component */
export function Button(props){
    return(
        <div className="buttons" >
        <input   type="submit" >{props.name}</input>
        </div>
    )
}