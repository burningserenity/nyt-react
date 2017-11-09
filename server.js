const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const port = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// Serve static assets
app.use(express.static("client/build"));
// Routes
app.use(routes);

// Mongoose
mongoose.Promise = global.Promise;
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/nytreact",
    {
        useMongoClient: true
    }
);

// GO!
app.listen(port, () => {
    console.log(`🌎  ==> Listening on port ${port}...`)
});
