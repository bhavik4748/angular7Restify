const restify = require('restify');
const config = require('./config');


const server = restify.createServer();

server.use(restify.plugins.bodyParser());

server.listen(config.PORT, () => {
    console.log('server started ');
    require('./routes/api')(server);
    console.log(`Server started on port ${config.PORT}`);
});



