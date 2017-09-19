const nunjucks = require("nunjucks");
const express = require("express");
const app = express();
const morgan = require("morgan");
const volleyball = require("volleyball");
const routes = require("./routes");
const path = require("path");
const bodyParser = require("body-parser");
const fs = require('fs');

app.use(morgan("dev"));

//-----------------------
// Parse the application
app.use(bodyParser.urlencoded({ extended: true }));

// Parse application/ JSON
app.use(bodyParser.json());

//-------------------

app.engine("html", nunjucks.render);
app.set("view engine", "html");
nunjucks.configure("views", { noCache: true });

// app.get("/", function (req, res) {
//     res.render('index', { title: 'Hall of Fame', people: people });
// })
app.use(express.static(path.join(__dirname, "/public")));


app.listen(3000, function () {
    console.log("Active on port 3000!");
});

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf' },
        { name: 'Frodo' },
        { name: 'Hermione' }
    ]
}



const people = [{ name: "Full" }, { name: "Stacker" }, { name: "Son" }];

app.use('/', routes);