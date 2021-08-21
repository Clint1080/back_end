const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.


const ctrl = require('./controllers/messagesController')

app.get('/api/compliment', ctrl.getCompliment)
app.get('/api/fortune', ctrl.getFortune)
app.get('/api/movies', ctrl.getAllMovies)
app.post('/api/movies', ctrl.createMovie)
app.delete('/api/movies/:id', ctrl.deleteMovie)


app.listen(4000, () => console.log("Server running on 4000"));
