console.log("Start Web Server");
const express = require('express');
const app = express();

const fs = require("fs");

// MongoDB call
const db = require("./server").db();  // This will use db object from server.js file to read, write, delete data in our database


let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR", err);
    } else {
        user = JSON.parse(data)
    }
});

// 1 - Intro codes: Codes that are related to the data coming to express (Middleware)
app.use(express.static("public"));                  // any requests from browser can only access this folder (CSS, images etc.)
app.use(express.json());                            // will convert json data to an object data. We know the data between client and web server is in json format
app.use(express.urlencoded({extended: true}));      // traditional request form. By writing this code our express will accept any post from html FORM


// 2 - Session codes
// 3 - Views codes
app.set("views", "views");          // 2nd argument is a folder name
app.set("view engine", "ejs");

// 4 - Routing codes
app.post("/create-item", (req, res) => {   // post() used to bring the data and write it to DB
    console.log('user entered /create-item');
    console.log(req.body);
    //res.json({test: "success"});
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        if (err) {
        console.log("ERROR:", err);
        res.end("Oops! Something went wrong!");
    } else {
        res.end("Successfully added!"); 
    }
});
});

app.get("/author", (req, res) => {
    res.render("author", { user: user });
});

app.get("/", function(req, res) {          // get() used to get (read) the data from DB
    console.log('user entered /');
    db.collection("plans").find().toArray((err, data) => {
        if (err) {console.log(err); res.end("Oops! Something went wrong!");}
        else {
            // console.log(data);
            res.render("reja", {items: data});
        }
    });
});

// app.get("/gift", function(req, res) {
//     res.end(`<h1>You are in gifts section</h1>`);
// });

module.exports = app;


/* PATTERNS
    1. Architectural Pattern        - MVC, Cache...
    2. Design Pattern               - Middleware
*/
