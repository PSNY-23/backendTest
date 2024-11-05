import express from "express";

const app = express();

// Define a route for the root URL
app.get("/", (req, res) => {
    res.send("Hello worldfajs;oaie");
});

// Start the server and listen on port 3000
app.listen(3000, () => {
    console.log("Port is running on 3000");
});
