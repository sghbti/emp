import React from 'react';
class Input extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="labels" >
                <label > {this.props.placeholderv }</label>
                <br/>
                <input  type={this.props.typev}
                placeholder={this.props.placeholderv}

                />
                </div>
        )
    }
}
export default Input;