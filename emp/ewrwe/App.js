import React, { Component } from 'react';
import './components/external.css';
// import {Linkheader,Routeheader} from './components/linkheader';

import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import NavigationBar from './components/NavigationBar'
import {SideBarList,SideBarRoute,Linkheader} from './components/resuable';


class App extends Component {
  constructor(props){
  super(props);
  this.state={
    toggle:true
  }
  this.Toggling=this.Toggling.bind(this);
}

 
  Toggling(){document.getElementById('SideBar').classList.toggle('active');}
  
  render() {
    return (
  <div className="App">
      
       <NavigationBar updateToggle={this.UpdateToggle}/>
  
       <Router>
          <div >
               <div id="SideBar">
                      <SideBarList/>
               </div>
               
                <div className="PageContent"> 
              
                   
                 <div className='header'>
                 <Linkheader/>
           
                <Switch>
                <SideBarRoute/>
                </Switch>
                </div>
         </div>
         </div>
      </Router>
   </div>
    );
  }
}

export default App;
