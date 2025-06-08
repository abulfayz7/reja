const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://abulfayz7:YfUc9qkpjqNGdprH@cluster0.rjbcyy2.mongodb.net/Reja";

mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
        console.log("MongoDB connection succed");
        // console.log(client);  // This will show the client object
        module.exports = client; // we will use client (Object that MongoDB returned) further
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function() {
            console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
});
    }
});





