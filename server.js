console.log("Start Web Server");
const express = require('express');
const app = express();
const http = require("http");

// 1 - Intro codes: Codes that are related to the data coming to express 
app.use(express.static("public"));                  // any requests from browser can only access this folder (CSS, images etc.)
app.use(express.json());                            // will convert json data to an object data. We know the data between client and web server is in json format
app.use(express.urlencoded({extended: true}));      // traditional request form. By writing this code our express will accept any post from html FORM


// 2 - Session codes
// 3 - Views codes
app.set("views", "views");          // 2nd argument is a folder name
app.set("view engine", "ejs");

// 4 - Routing codes
app.post("/create-item", (req, res) => {   // post() used to bring the data and write it to DB
    console.log(req.body);
    res.json({test: "success"});
});

app.get("/", function(req, res) {          // get() used to get (read) the data from DB
    res.render("harid");
});

// app.get("/gift", function(req, res) {
//     res.end(`<h1>You are in gifts section</h1>`);
// });

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running successfully on port: ${PORT}`);
});
