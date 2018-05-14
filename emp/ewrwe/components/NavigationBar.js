import React,{Component} from 'react';

class NavigationBar extends Component{

    constructor(props)
    {
        super(props);
        this.Update=this.Update.bind(this);
    }
    Update()
    {
        document.getElementById('SideBar').classList.toggle('active');
    } 
render(){

    return(
        <div className="NavigationBar">
        
       <div> <button className="ToggleButton" onClick={this.Update} >☰</button></div>
      
        </div>
        )
}

}

export default NavigationBar;