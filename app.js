/**** Import Libraries ****/
const express = require('express');
const port = process.env.PORT || 8080

/**** Set Up ****/
const app = express();
app.use(express.static(__dirname + '/public', {extensions: ['html', 'htm']}));

const server = app.listen(port, () => {
    console.log("Server started at port: " + port);
})
