const express = require('express');
const userRouter = require('./router/userRouter');
const subscriberRouter = require('./router/subscriberRouter');
const utilRouter = require('./router/util');
const cors = require('cors');

const app = express();

const port = 5000;

app.use(express.json());


app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from your frontend
  methods: 'GET,POST,PUT,DELETE,OPTIONS', // Allow these HTTP methods
  allowedHeaders: 'Content-Type,Authorization', // Allow these headers
}));

// CORS configuration
app.use(cors());

// Logging incoming requests to /user route
app.use('/user', (req, res, next) => {
  console.log(`Incoming request to /user: ${req.method} ${req.url}`);
  next();
});

// Define routers
app.use('/user', userRouter);
app.use('/util', utilRouter);
app.use('/subscriber', subscriberRouter);

// Serve static resources
app.use(express.static('./static/resources'));

// Base route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log('Server has started on port ' + port);
});
