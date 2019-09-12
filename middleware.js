const auth = require("./auth");
const mongooseHelper = require("./mongoose");
console.log(mongooseHelper.mongoose);
var infoSchema = new mongooseHelper.mongoose.Schema({
    userID: String,
    averageWPM: Number,
    practiceGames: Number
});
var User = mongooseHelper.mongoose.model('users', infoSchema);

// Tack a user object onto each request if possible
addUser = (req, res, next) => {
  if (!req.userinfo) {
    return next();
  }
  auth.oktaClient.getUser(req.userinfo.sub)
    .then(user => {
      req.user = user;
      res.locals.user = user;
      User.findOne({userID : user.id}, (err, user) => {
        if (!user){
            var user = new User({ 
                userID: req.user.id,
                averageWPM: 0,
                practiceGames: 0 
            });
            user.save(function (err, user) {
                console.log(user);
                if (err) return console.error(err);
            });
        }
      });
      next();
    }).catch(err => {
      next(err);
    });
};


// Only let the user access the route if they are authenticated.
function loginRequired(req, res, next) {
  if (!req.user) {
    return res.status(401).render("unauthenticated");
  }

  next();
}


module.exports = { addUser, loginRequired };