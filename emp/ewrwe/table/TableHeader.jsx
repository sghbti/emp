import React from 'react';
//import '../css/App.css';
const TableHeader = (props)=>{
       if(props.con==="u") return (
            <tr>
    <th>Name</th>   
    <th>Designation</th>
    <th>Contact Number</th>
    <th>Email Address</th>
    <th>Status</th>
    <th>Rating</th>
  </tr>
        )
        else{
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

    }

export default TableHeader;