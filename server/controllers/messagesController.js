const movies = require('../db.json')

module.exports = {
    
    
    getCompliment: (req, res) => {
        const compliments = [
            "Gee, you're a smart cookie!",
            "Cool shirt!",
            "Your Javascript skills are stellar.",
        ];

        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];

        res.status(200).send(randomCompliment);

    },
    
    getFortune: (req, res) => {
        const fortunes = [
            "A beautiful, smart, and loving person will be coming into your life.",
            "Everywhere you choose to go, friendly faces will greet you.",
            "Follow the middle path. Neither extreme will make you happy.",
            "Go take a rest; you deserve it.",
            "If you’re feeling down, try throwing yourself into your work.",
        ];

        // choose random compliment
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

    getAllMovies: (req, res) => res.status(200).send(movies),
    createMovie: (req, res) => {
        let { movie_title, imageURL} = req.body
        let newMovie = {
            id: movies[movies.length - 1].id + 1,
            movie_title,
            imageURL
        }
        movies.push(newMovie)
        res.status(200).send(movies)
    }
}