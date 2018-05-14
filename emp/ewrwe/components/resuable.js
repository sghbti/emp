import React from 'react';
import { Switch, Route, Link} from 'react-router-dom';
import AddUser from './AddUser';
import Signup from './signup'
import Users from '../table/Table'

/*SideBar------------  list Elements   */
export function SideBarList(props){
    return(
        <div>
        <ul>
                  <li><Link to={'/DashBoard'}>DashBoard</Link></li>
                  <li><Link to={'/AddUser'}>Users</Link></li>
                  <li><Link to={'/Proj'}>Projects</Link></li>
                  <li><Link to={'/AssProj'}>Assign Project</Link></li>
                  <li><Link to={'/CreAssProj'}>Create and Assign Project</Link></li>
                  <li><Link to={'/DelGateP'}>DelegateTask</Link></li>
                  <li><Link to={'/FeedBckRat'}>FeedBack {'&'} Rating </Link></li>
                  <li><Link to={'/Logout'}>Logout</Link></li>

              </ul>
              
              
              </div>
    )
}




export function Linkheader(){
    return(
        <Link to="/add_user" >Add user</Link>

    )
}

/*SideBar-------------------  Routes of List Elements */

export function SideBarRoute(props){
    return(
        <Switch>
               <Route  path='/AddUser' render={()=><Users con="u" />} />
               <Route   path='/DashBoard' component={AddUser} />
               <Route   path='/CreAssProj' render={()=><Users con="l" />} />
               <Route exact path="/add_user" component={Signup}/>
              
               </Switch>
    )
}