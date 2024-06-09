const express = require("express");
const app = express();

const port = 8080;
const path = require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());


const{ v4: uuidv4} = require("uuid");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));

app.get("/insta",(req,res) =>{
    
    res.render("insta.ejs",{posts});
});

app.get("/insta/new",(req,res)=>{

res.render("inew.ejs");
});

app.post("/insta",(req,res)=>{
    let{username,tag,link} = req.body;
    let id = uuidv4();
    posts.push({id,username,tag,link});
    res.redirect("/insta");
    console.log(req.body);
});

app.get("/insta/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id);
    res.render("ishow.ejs",{post});
})

app.patch("/insta/:id", (req,res) =>{
    let{id} = req.params;
    let newTag = req.body.tag;
    let newLink = req.body.link;
    let post = posts.find((p)=> id ===p.id);
    post.tag = newTag;
    post.link = newLink;
    res.redirect("/insta");
} )

app.get("/insta/:id/edit",(req,res) =>{
let {id} = req.params;
let post = posts.find((p)=> id === p.id);
res.render("iedit.ejs", {post});
} )

app.listen(port,(req,res) =>{
    console.log("listening to port");
});

let posts = [{
    id:uuidv4(),
    username:"rohan546",
    tag: "#coding",
    link: "https://woz-u.com/wp-content/uploads/2022/06/Evolution-of-Coding-scaled.jpg",

},
{   id:uuidv4(),
    username:"rahul5152",
    tag: "#animalLover",
    link: "https://t4.ftcdn.net/jpg/04/15/79/09/360_F_415790935_7va5lMHOmyhvAcdskXbSx7lDJUp0cfja.jpg",

}
];
