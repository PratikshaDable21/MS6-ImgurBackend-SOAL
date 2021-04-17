const express = require("express");
const path = require("path");


const app = express();
const PORT = 5000;
const Users = [{
    Username : "Micheal",
    email : "micheal@hotmail.com",
}, {
    Username : "John",
    email : "john@gmail.com"
},{
    Username : "Ryan",
    email : "ryan@outlook.com"
}]

app.get('/api/users', (req,res) => {
    res.send(Users);
})

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
  })


app.listen(PORT, () => console.log("Express Server is running on PORT - ",PORT))