import React,{Component} from 'react'


class CommonHeader extends Component{
  render(){
         if(this.props.compPassed==='Tasks'){
            //  console.log(this.state.HeaderValue);
            return (
                <div className="header-container">
                    <div className="title">
                         {this.props.con} 
                    </div>
                
                 
                 </div>
             )}
         if(this.props.compPassed==='Users'){
            // console.log(this.state.HeaderValue);
           return (
         <div className="header-container">
            <div className="title">
                {this.props.con} 
            </div>
         
            <button className="Ref" className="Ref"  >Add +</button>
        
        </div>
        )
     }
     if(this.props.compPassed==='Projects')
    {//  {console.log(this.state.HeaderValue);
        return (
            <div className="header-container">
               <div className="title">
                   {this.props.con} 
               </div>
               <button className="Ref" className="Ref"  >Add +</button>
           </div>)
           
     }
     return null ;
  } 

}

export default CommonHeader;