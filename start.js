const app = require('./app');
const port = process.env.PORT || 8080

const server = app.listen(port, function(){
    console.log('Server running on port: ' + port);
});