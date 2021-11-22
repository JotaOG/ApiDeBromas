const Joke = require("../controller/jokes.controller")

module.exports = (app) => {
    app.get("/api/jokes", Joke.findAllJokes);
    app.get("/api/jokes/:id", Joke.findOneSingleJokes);
    app.put("/api/jokes/:id", Joke.updateExistingJokes);
    app.post("/api/jokes", Joke.createNewJokes);
    app.delete("/api/jokes/:id", Joke.deleteAnExistingJokes);
  };
  