import React from 'react';
class Rating extends React.Component{
    constructor(props){
        super(props);
        this.state={
            oldstars:this.props.stars,
            newstars:this.props.stars,
            
        }
        // alert(this.state.newstars);
    
    }
    handleClick(newvalue){
        this.setState({
            newstars:newvalue,
            oldstars:newvalue,
    
        })
    }
    handleMouseEnter(newvalue){
     this.setState({
         newstars:newvalue

     })
    }
    handleMouseLeave(newvalue){
        this.setState({
            newstars:this.state.oldstars

        })
    }

    render(){

        const stararray=[];
        for(var i=1;i<=5;i++){
            if(i <= this.state.newstars){
                // console.log('array ',stararray);
                stararray.push(
                <span 
                key={i}

                className='star'
                onMouseEnter={this.handleMouseEnter.bind(this,i)}
                onMouseLeave={this.handleMouseLeave.bind(this)}
                onClick={this.handleClick.bind(this,i)}
                >
                    ★ 
                    </span>

            )
         }  
         else{
            stararray.push(
                <span 
                key={i}

                className='star'
                onMouseEnter={this.handleMouseEnter.bind(this,i)}
                onMouseLeave={this.handleMouseLeave.bind(this)}
                onClick={this.handleClick.bind(this,i)}
                >
                    ☆
                    </span>

            )

         } 
        }
        console.log('array  ',stararray);
        return(
        
        <div>
        {stararray}</div>
            
         
        )
    }
}
export default Rating;