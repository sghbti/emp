import React from 'react';
import './common.css';
import {BrowserRouter as Router ,Link,Switch} from 'react-router-dom'
import Help from './help';

class Navigate extends React.Component{
    constructor(props){
        super(props);
        this.showing=this.showing.bind(this);
    }
    showing(){
        console.log('hi buddy');
            
    }

    render(){
    return(
    <div className="navigate">
    
   <p className="name">Hello,{this.props.name}</p>

        </div>
    );
}


}
export default Navigate;
{/* <Router>
<div>
 <Link to='/help'>help</Link>
<Switch>
<Route exact path='/d' component={Signup} />
<Route  exact path='/help' component={Help}/>
</Switch>
</div>
</Router> */}