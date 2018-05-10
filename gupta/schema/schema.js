const buildschema=require('graphql')
// var {buildSchema} =require ('graphql');
 
var Schema=buildSchema(`


type Query{
    AllUser:String
}


type Mutation{
    LoginUser(Name:Token,PassWord:String!):Token

}
type Token{
Token:String
}

`);


module.exports=Schema;



























const buildschema=require('graphql');
var Schema=new buildschema(`
type Query{
    alluser:GraphQLStr
}

}
`)








