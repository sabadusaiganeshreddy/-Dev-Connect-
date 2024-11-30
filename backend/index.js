const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/dev-platform', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const userRoutes = require('./routes/users');
const questionRoutes = require('./routes/questions');
const hackathonRoutes = require('./routes/hackathons');
const answerRoutes = require('./routes/answers');

app.use('/users', userRoutes);
app.use('/questions', questionRoutes);
app.use('/hackathons', hackathonRoutes);
app.use('/answers', answerRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});