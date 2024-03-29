const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// Body-parser is the Node.js body parsing middleware. 
// It is responsible for parsing the incoming request bodies in a middleware before you handle it.
const bodyParser = require('body-parser');
global.Task = require('./api/models/farmingtalesModel-monitor');
global.Task1 = require('./api/models/goldmandModel-monitor');
global.Task3 = require('./api/models/farmingtalesModel-config');
global.Task4 = require('./api/models/goldmandModel-config');
const routes = require('./api/routes/routes');
// mongoose.Promise = global.Promise;
// mongoose.set('useFindAndModify', false);
mongoose.connect(
  process.env.URL_DATABASE,
  { useNewUrlParser: true }
);
const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
// tells the system whether you want to use a simple algorithm for shallow parsing (i.e. false) 
// or complex algorithm for deep parsing that can deal with nested objects (i.e. true).
app.use(bodyParser.urlencoded({ extended: true }));
// tells the system that you want json to be used.
app.use(bodyParser.json());

routes(app);
app.listen(port);

app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

console.log(`Server started on port ${port}`);
