
var jwt=require("jsonwebtoken")
var mysql=require('mysql')
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"user"
})
var array=[];

con.connect(function(err){
    if(err){
        console.log('there is problem',err);
        }
        else{
            const sql="select * from alluser"
            con.query(sql,(err,result)=>{
                if(err){
                    console.log("problem to access data")
                }
                else{
                    array=result;
                    console.log(result);
                    
            
                }
            })
            
        }
       
})


class User{//  return anything accordingly
    
    name(){
        var output=[];
        console.log('array:',array);
        array.forEach((arr)=>{
            output.push(arr.Username);//how return arr.Usernme for all user in db
        
    })
    return output;
    // console.log('both ',array.Username)
    // for(let i=0;i<array.length;i++){
    //     output.push(array.Username)
    //     console.log('both ',output,' ',array.Username)
    // }
    // return output;
}
    password(){
        var output=[];
        // console.log(password);
        array.forEach((arr)=>{
        output.push(arr.Password)
        })
return output;
    }

}
var Token=null;
class Updateuser{
    
    name(args){ 
        return{
            Token(){
              var x=0;
        console.log('mutate:',args.name)
    for(var i=0;i<array.length;i++){
            if(args.name===array[i].Username){
                x++;
                
            }
        }
        if(x){
         Token=jwt.sign(args.name,'skey') 
        }
        else{
            Token="sorr..."
        }
        return Token;
    }
}
        // con.connect(function(err){
        //     if(err){
        //         console.log('not update')
        //     }
        //     const sql=`update alluser set name="${name}"  where password='1234567' `;
        //     console.log.log('updated::')
        // })
        // return args.name;

    }
    password(args){
        console.log('mutate:',args.password)
        return args.password;

    }


}

var resolver={
alluser:function(){
    return new User()
},
updateAlluser:function(){
    return new Updateuser();
}
}
module.exports={con,Token}
module.exports={resolver,User,Updateuser}
// module.exports=Updateuser;
