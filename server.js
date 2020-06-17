const express = require("express");

const app = express();

app.get("/", function (req, res) {
    res.send("<h1>Hello there!</h1>");
});

app.get("/contact", function (req, res) {
    res.send("Contact me at: Paulorubebe@yahoo.com");
});

app.get("/about", function (req, res) {
    res.send("<h2>Hi there, I'm Tamarah Orubebe, an Optometrist and a budding Web Developer</h2>");
});

 app.get("/hobbies", function (req, res) {
		res.send(
			"<ul><li>Movies</li><li>Music</li><li>Cooking</li><li>Writing Poems</li>"
		);
 });




app.listen(3000, function () {
    console.log("server has started on port 3000");
});



 