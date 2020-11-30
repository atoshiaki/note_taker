const express = require('express')
const file = express();
// port 5001 because VScode live server is on 5000
const PORT = process.env.PORT || 5001;
file.use(express.urlEncoded({extended: true}));
file.use(express.json());
file.use(express.static("public"));
require("./routes/noteApiRoutes")(file);
require("./routes/htmlRoutes")(file);
file.listen(PORT, function() {
    console.log("PORT: " + PORT);
});