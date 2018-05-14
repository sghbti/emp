import React from 'react';
import Rating from '../components/ratingbar'
import TableHeader from './TableHeader'
import TableData from './TableData'
import SignUp from '../components/signup'
import '../components/external.css';

import CommonHeader from '../components/CommonHeader'

class Table extends React.Component {
    constructor(props)
    {
       super(props);
       this.state={
        userList: [
            { userId: 0, name: "Swarn", role: "Developer", num: "9868227703", email: "swarntyagi@4723gmia", status: "Yes", rating: <Rating stars={0}/> },
            { userId: 1, name: "Shiv", role: "Developer", num: "98682274565", email: "swarntyagi@4723gmia", status: "No", rating:<Rating stars={0} /> },

        ],

        taskList: [
            { taskId: 0, title: "Create Filter", assignedTo: "Swarn,Kuldeep", est: "12", spent: "8", QATime: "8/4", QAStatus: "test Cases", type: "UI Issue", completion: "40%" },
            { taskId: 1, title: "Create Filter", assignedTo: "Swarn,Kuldeep", est: "12", spent: "8", QATime: "8/4", QAStatus: "test Cases", type: "UI Issue", completion: "40%" }],


        projectList: [{ projectId: 0, title: "CRM App", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ad quibusdam est sapiente aliquam officiis alias dicta fuga fugiat earum optio nisi incidunt, temporibus aspernatur laboriosam rem. In, quia at.", projectManager: "Devesh Naswa", startDate: "08/03/12" }], nextUserId: 2, nextTaskId: 2, nextProjectId: 1
,ClickedState:false
       } 
       var array=['shiva','sssssd'];
    }
    render() {
        
        if(this.state.ClickedState===false)
        {
        if(this.props.con=="Users"){ return (
            <div className=""> 
             <CommonHeader compPassed={"Users"} con={this.props.con} ClickingState={()=>this.setState({ClickedState:true})}/>
            <table id="customers">
            <tbody>
            <TableHeader con={this.props.con} />
                    {this.state.userList.map((user) => {
                        return <TableData con={this.props.con} key={user.userId} userId={user.userId} name={user.name} role={user.role} num={user.num} email={user.email} status={user.status} rating={user.rating} />
                    })
                    }
           </tbody>
            </table>
            </div>
       
)
}  if (this.props.con == "Tasks")
    {
          return( <div> <CommonHeader con={this.props.con} compPassed={"Tasks"} />
            <table id="customers">
            <tbody>
           <TableHeader con={this.props.con} />
                    {
                        this.state.taskList.map((task) => {
                            return <TableData con={this.props.con} key={task.taskId} taskId={task.taskId} title={task.title} assignedTo={task.assignedTo} est={task.est} spent={task.spent} QATime={task.QATime} QAStatus={task.QAStatus} type={task.type} completion={task.completion} />
                        })
                    }   
                    </tbody>
                    </table>
                    </div>)}
     if (this.props.con == "Projects") {
        return (<div>
          <CommonHeader con={this.props.con} compPassed={"Projects"} />
            <table id="customers">
            <tbody>
                <TableHeader con={this.props.con} />
                {
                    this.state.projectList.map((project) => {
                        return <TableData con={this.props.con} key={project.project} title={project.title} description={project.description} projectManager={project.projectManager} startDate={project.startDate} />

                    })

                }
                </tbody>
            </table> </div>
        )
    }
    }
  
}
}
export default Table;
