import React from 'react';
//import '../css/App.css';
const TableData =(props)=> {
    
        if(props.con==="Users")
        {return (
     <tr>
    <td >{props.name}</td>
    <td >{props.role}</td>
    <td >{props.num}</td>
    <td >{props.email}</td>
    <td >{props.status}</td>
    <td >{props.rating}</td>
    
  </tr>
            )
        }
       if(props.con==="Tasks") {
                return(
                        <tr>
                        <td>{props.title}</td>
                        <td>{props.assignedTo}</td>
                        <td>{props.est}/{props.spent}</td>
                        <td>{props.QATime}</td>
                        <td>{props.QAStatus}</td>
                        <td>{props.type}</td>   
                        <td>{props.completion}</td>                   
                         </tr>
                              
                )

        }
        if(props.con==="Projects"){
                return(
                        <tr>
                        <td>{props.title}</td>
                        <td>{props.description}</td>
                        <td>{props.projectManager}</td>
                        <td>{props.startDate}</td>                   
                         </tr>
                              
                )

        }
        return "Hello";
    }

export default TableData;