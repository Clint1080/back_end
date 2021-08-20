const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.


const {
  getCompliment,
  getFortune
} = require('./controllers/messagesController')

app.get('/api/compliment', getCompliment)
app.get("/api/fortune", getFortune);


app.listen(4000, () => console.log("Server running on 4000"));
