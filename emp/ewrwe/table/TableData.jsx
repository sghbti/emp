import React from 'react';
//import '../css/App.css';
const TableData =(props)=> {
        if(props.con==="u")
        {return (
            <tr>
    <td>{props.name}</td>
    <td>{props.role}</td>
    <td>{props.num}</td>
    <td>{props.email}</td>
    <td>{props.status}</td>
    <td>{props.rating}</td>
  </tr>
            )
        }
        else{
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
    }

export default TableData;