const express = require('express');
var session = require("express-session");
const handlebars = require('express-handlebars');
var okta = require("@okta/okta-sdk-nodejs");
var ExpressOIDC = require("@okta/oidc-middleware").ExpressOIDC;
const dashboardRouter = require("./routes/dashboard");
const practiceRouter = require("./routes/practice");
const usersRouter = require("./routes/users");
const unauthenticatedRouter = require("./routes/unauthenticated");
const competeRouter = require("./routes/compete");
const addData = require("./routes/adddata");
const auth = require("./auth");
const middleware = require("./middleware");
const app = express();
const port = 3000;
const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const mongooseHelper = require("./mongoose");
const bodyParser = require("body-parser");



app.set('view engine', 'handlebars');


app.use(session({
    secret: '9h7adw9g7aydw97hjjdf1236dadwh97',
    resave: true,
    saveUninitialized: false
}));

app.use(auth.oidc.router);
app.use(middleware.addUser);
app.use(bodyParser.json());




app.use(express.static('public'));
app.engine('handlebars', handlebars({
    helpers: {
        equals: function(arg1, arg2, options) {
            return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
        }
    },
}));

app.use('/dashboard', middleware.loginRequired, dashboardRouter);
app.use('/practice', practiceRouter);
app.use('/users', usersRouter);
app.use('/unauthenticated', unauthenticatedRouter);
app.use('/compete', competeRouter);
app.use('/adddata', addData);

app.get('/', (req, res) => {
    res.render('index', {navbarSelected: 0});
});





app.listen(port, () => console.log(`TypeComp launched on port ${port}!`));