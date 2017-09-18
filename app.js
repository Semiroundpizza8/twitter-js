const nunjucks = require("nunjucks");
const express = require("express");
const app = express();
const morgan = require("morgan");

app.engine("html", nunjucks.render);
app.set("view engine", "html");
nunjucks.configure("views", { noCache: true });

app.use(morgan("dev"));

app.get("/", function (req, res) {
    res.render('index', { title: 'Hall of Fame', people: people });
})

app.listen(3000, function () {
    console.log("hello!");
})
var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf' },
        { name: 'Frodo' },
        { name: 'Hermione' }
    ]
}



const people = [{ name: "Full" }, { name: "Stacker" }, { name: "Son" }];
