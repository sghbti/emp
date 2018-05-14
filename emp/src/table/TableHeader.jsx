import React from 'react';
//import '../css/App.css';
const TableHeader = (props)=>{
       if(props.con==="Users") return (
            <tr>
    <th>Name</th>   
    <th>Designation</th>
    <th>Contact Number</th>
    <th>Email Address</th>
    <th>Status</th>
    <th>Rating</th>
  </tr>
        )
        if(props.con==="Tasks"){
            return (
                <tr>
        <th>Title</th>
        <th>Assigned To</th>
        <th>Est./Spent</th>
        <th>QA Time</th>
        <th>QA Status</th>
        <th>Type</th>
        <th>Completion</th>
      </tr>
            )
        }
        if (props.con==="Projects"){
            return(

                <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Project Manager</th>
                <th>Start Date</th>
              </tr>
            )
        }
        return "Hello";

    }

export default TableHeader;