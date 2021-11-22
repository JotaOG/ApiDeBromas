const { Joke } = require("../model/jokes.model")

module.exports.findAllJokes = (req, res) => {
    Joke.find()
      .then((allJokes) => res.json({ jokes: allJokes }))
      .catch((err) => res.json({ message: "Something went wrong", error: err }));
  };
  
  module.exports.findOneSingleJokes = (req, res) => {
    Joke.findOne({ _id: req.params.id })
      .then((oneSinglerJokes) => res.json({ jokes: oneSinglerJokes }))
      .catch((err) => res.json({ message: "Something went wrong", error: err }));
  };
  
  module.exports.createNewJokes = (req, res) => {
    Joke.create(req.body)
    .then(newCreatedJokes => res.json({ joke: newCreatedJokes }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
  };
  
  module.exports.updateExistingJokes = (req, res) => {
      Joke.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true })
      .then(updateExistingJokes => res.json({ joke: updateExistingJokes }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };
  
  module.exports.deleteAnExistingJokes = (req, res) => {
      Joke.deleteOne({ _id: req.params.id })
      .then(result => res.json({ result: result }))
      .catch(err => res.json({ message: "Something went wrong"}));
  };