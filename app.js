const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;



app.use(express.static('public'));
app.engine('handlebars', handlebars({
    helpers: {
        equals: function(arg1, arg2, options) {
            return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
        }
    },
}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('index', {title: "BET"});
});
app.get('/practice', (req, res) => {
    res.render('practice', {navbarSelected: 2});
});

app.listen(port, () => console.log(`TypeComp launched on port ${port}!`));