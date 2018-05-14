import React from 'react';
import TableHeader from './TableHeader'
import TableData from './TableData'
import '../components/external.css';
class Table extends React.Component {
    render() {
        
        if(this.props.con=="u"){ return (
            <table id="customers">
                <TableHeader con={this.props.con} />
              <TableData con={this.props.con} name="Swarn" role="Developer" num="9868227703" email="swarntyagi@4723gmia" status="Yes" rating="4" />
                <TableData con={this.props.con} name="Kuldeep" role="Developer" num="9868427703" email="kuldeep@gmail.com" status="Yes" rating="5" />
                <TableData  con={this.props.con} name="Shiv" role="Business Analyst" num="9864567703" email="shiv@gmail.com" status="No" rating="2" />
                <TableData   con={this.props.con}name="Shiv" role="Business Analyst" num="9864567703" email="shiv@gmail.com" status="No" rating="2" />
                <TableData con={this.props.con} name="Shiv" role="Business Analyst" num="9864567703" email="shiv@gmail.com" status="No" rating="2" />
                {/* <TableData name="Shiv" role="Business Analyst" num="9864567703" email="shiv@gmail.com" status="No" rating="2" />
         */}
        

            </table>
       
)
}else
    {
          return( 
            <table id="customers">
            <TableHeader con={this.props.con} />
               
            <TableData con={this.props.con} title="Create Filter" assignedTo="Swarn,Kuldeep" est="12"spent="8" QATime="8/4" QAStatus="test Cases" type="UI Issue" completion="40%" />
            </table>
     )}
    }
}

export default Table;
