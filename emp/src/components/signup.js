
import Input from './input'
import Button from './button'
import React from 'react'
import './common.css'
class Signup extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className="containerform">
                <form  className="forms" >
                    <Input placeholderv={"User_Name"} typev={"text"} />
                    <Input placeholderv={"User_Name"} typev={"assword"}/>
                    <Input placeholderv={"E-Mail"} typev={"email"}/>
                    <Input placeholderv={"Designation"} typev={"text"}/>
                    <Input placeholderv={"Contact_Number"} typev={"number"}/>
                    <Button name={"Cancel"} />
                    <Button name={"Submit"} />
                
                    </form>
                 </div>
        )
    }
}
export default Signup;
