var express=require('express')
var app=express();
var egraphql=require('express-graphql')
var {buildSchema} =require('graphql')
var {con,resolver,User}=require('./gquery')
// var Updateuser =require("./gquery")
var cors=require('cors')

app.use(cors());
var schema=buildSchema(`
    type Query{
        alluser:User
    },
  type Mutation {
      updateAlluser:Updateuser
  },
  type Updateuser{
      name(name:String):Token
      password(password:String):String
     
  },
    type User{
        name:[String]
        password:[String]
    }
    type Token{
Token:String
}


    `)

  app.use('/graphql',egraphql({
        schema:schema,
        rootValue:resolver,
        graphiql:true

    }))

    app.listen(4000);
    console.log('at 4000');
    
    // setTimeout(()=>{
    //     console.log(Updateuser);
        

    // },2000);
    