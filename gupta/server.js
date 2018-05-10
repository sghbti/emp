var express=require('express');
// var egraphql=require('express-graphql')
// const schema=require('./schema/schema')
var app=express();


const mysql=require('mysql');


const con=mysql.createConnection({
    host : 'localhost',
    user:'root',
    password:'root',
    database:'user'
})
var  arr=[];

con.connect(function(err){
    if(err){console.log('there is cerr in connection')}

    else{
        console.log('connected');
        // const sql="create table Alluser(Username varchar(20),Password varchar(15))";
        const sql="select * from alluser"
        con.query(sql,(err,result)=>{
            if(err) console.log(err);
            else{
                arr=result
                 console.log('table created & data : ',arr);}
        })
    }

})

// app.use('/graphql',egraphql({
//     schema:schema,
//     graphiql:truey

// }))

app.listen(4000,()=>{
    console.log('serevr running at 4000 port')
})
module.exports=con;