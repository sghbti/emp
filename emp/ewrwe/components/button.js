import React from 'react';

import {Link} from 'react-router-dom';
class Button extends React.Component{
    constructor(props){
        super(props);
        this.submit=this.submit.bind(this);
    }
    submit(e){debugger;
        e.preventDefault();
        console.log(e);
        // <Link to= '/toggle'  />
        
    }
    render(){

        return(
    
    
                     <button  className="buttons" onClick={this.submit}>{this.props.name}</button>
                
            
        )
    }
}
export default Button;