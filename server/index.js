const restify = require('restify');
const config = require('./config');
var corsMiddleware = require('restify-cors-middleware');

var cors = corsMiddleware({
    preflightMaxAge: 5,
    origins: ['*']
});

const server = restify.createServer();
server.pre(cors.preflight);
server.use(cors.actual);

//server.use(restify.plugins.bodyParser());


require('./routes/api')(server);

server.listen(config.PORT, function () {
    console.log('%s listening at %s', server.name, server.url);
});


