const { response, request } = require('express')
const express = require ('express')
const app = express()
 const PORT = 8000


 const rappers = {
    '21 savage': {
        'age': 29,
        'birthLocation': 'Who Knows',
        'birthName': 'London'
    },
    
    'chance the rapper':{
        'age':29,
        'birthLocation': 'Who Knows',
        'birthName': 'London'
    },
    'unknown':{
        'age': 0,
        'birthLocation': 'unknown',
        'birthName': 'unknown'
    }

 }
 
   
 


app.get('/',(request, response) =>{
response.sendFile(__dirname + '/index.html')

})



app.get('/api/:name',(request,response) =>{
   const rapperName = request.params.name.toLowerCase()
   if (rappers [rapperName]){
    response.json(rappers[rapperName])

}else{
    response.json(rappers['unknown'])
}

   
  
})






app.listen(PORT ,()=>{
console.log (`the server is running on ${PORT}! lets get this xavier!`)
})