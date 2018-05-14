
import {Input, Button} from './resuable'
import React from 'react'
import CommonHeader from './CommonHeader'
class Signup extends React.Component{
   
    render(){
        return(
            <div>
               <CommonHeader compPassed={"AddUsers"} con={"AddUsers"} />
                     <div className="containerform">
                          <form  className="forms" >
                             <Input placeholderv={"User_Name"} typev={"text"} />
                             <Input placeholderv={"User_Name"} typev={"assword"}/>
                             <Input placeholderv={"E-Mail"} typev={"email"}/>
                             <Input placeholderv={"Designation"} typev={"text"}/>
                             <Input placeholderv={"Contact_Number"} typev={"number"}/>
                    
                    </form>
                 </div>
             </div>
        )
    }
}
export default Signup;
