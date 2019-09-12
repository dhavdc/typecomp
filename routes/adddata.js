const express = require("express");
const mongooseHelper = require("../mongoose");
const router = express.Router();

// Display the dashboard page
router.post("/practice", (req, res) => {
    console.log(req.body.wpm);
    console.log(req.user);
    

    // User.findOneAndUpdate({userID : req.user }, (err, user) => {
    //     if (!user){
    //         var user = new User({ 
    //             userID: req.user.id,
    //             averageWPM: 0,
    //             practiceGames: 0 
    //         });
    //         user.save(function (err, user) {
    //             console.log(user);
    //             if (err) return console.error(err);
    //         });
    //     }});

});

module.exports = router;