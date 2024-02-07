const express = require("express");
const app = express();
app.use(express.json());

app.get("/add-member", (req, resp) => {
    resp.send("hello");
});



