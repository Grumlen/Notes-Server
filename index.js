import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import notes from './server/notes';

var app = express();

// MongoDB connection
mongoose.connect('localhost', 'notes-server');
var db = mongoose.connection;
db.on('error', (e) => console.log(e));
db.once('open', () => console.log('Database connected.'));

// Middleware
app.use(express.static('client'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use((req,res,next) => next());
// Router
app.use('/notes', notes);
// Error catching
app.use(function(err,req,res,next) {
  console.log(err);
  res.send({ err: 'problem' });
});

// Creating the server
app.listen(5000, () => console.log('Running on http://localhost:5000'));
