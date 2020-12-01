const express = require('express')
const app = express();
// port 5501 because VScode live server is on 5500
const PORT = process.env.PORT || 5501;
app.use(express.urlEncoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));
require("./routes/noteApiRoutes")(app);
require("./routes/htmlRoutes")(app);
app.listen(PORT, function() {
    console.log("PORT: " + PORT);
});