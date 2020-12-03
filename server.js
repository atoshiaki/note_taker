const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true }));
app.use(express.json());

require("./public/routes/noteApi")(app);
require("./public/routes/html")(app);

app.listen(PORT, function() {
    console.log("server is up, on:" + PORT)
});