const restify = require('restify');
const config = require('./config');


const server = restify.createServer();

server.use(restify.plugins.bodyParser());


require('./routes/api')(server);

server.listen(config.PORT, function () {
    console.log('%s listening at %s', server.name, server.url);
});


