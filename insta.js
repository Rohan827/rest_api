const express = require("express");
const app = express();

const port = 8080;
const path = require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/insta",(req,res) =>{
    
    res.render("insta.ejs",{posts});
});

app.get("/insta/new",(req,res)=>{

res.render("inew.ejs");
});

app.post("/insta",(req,res)=>{
    let{username,tag,link} = req.body;
    posts.push({username,tag,link});
    res.redirect("/insta");
    console.log(req.body);
});

app.listen(port,(req,res) =>{
    console.log("listening to port");
});

let posts = [{
    username:"rohan546",
    tag: "#coding",
    link: "https://woz-u.com/wp-content/uploads/2022/06/Evolution-of-Coding-scaled.jpg",

},
{   username:"rahul5152",
    tag: "#animalLover",
    link: "https://t4.ftcdn.net/jpg/04/15/79/09/360_F_415790935_7va5lMHOmyhvAcdskXbSx7lDJUp0cfja.jpg",

}
];
