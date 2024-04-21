const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define a Mongoose schema
const RecipeSchema = new mongoose.Schema({
  title: String,
  ingredients: [String],
  imageUrl: String
});
const Recipe = mongoose.model('Recipe', RecipeSchema);

// POST endpoint to save a new recipe
app.post('/api/recipes', (req, res) => {
  const { title, ingredients, imageUrl } = req.body;
  const newRecipe = new Recipe({ title, ingredients, imageUrl });
  newRecipe.save()
    .then(() => res.status(201).json({ message: 'Recipe saved successfully' }))
    .catch(err => res.status(500).json({ error: err.message }));
});

// GET endpoint to retrieve all recipes
app.get('/api/recipes', (req, res) => {
  Recipe.find()
    .then(recipes => res.status(200).json(recipes))
    .catch(err => res.status(500).json({ error: err.message }));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});