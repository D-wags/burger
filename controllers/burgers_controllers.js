var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var burger = require('../models/burger.js');

var router = express.Router();

// // burger
// router.get('/', function(req, res){
// 	res.redirect('/burgers');
// });

// // show burgers
// router.get('/burgers', function(req, res) {
//     burger.selectAll(function(data) {
//         res.render('index', { burgers: data });
//     });
// });

// //when route is burger/create run function
// router.post('/burgers/create', function(req, res) {
//     burger.insertOne('burger_name', req.body.name, function() {
//         res.redirect('/burgers');
//     });
// });

// //update route
// router.post('/burgers/update/devour/:id', function(req, res) {
//     burger.updateOne('burgers','devoured', req.params.id, function() {
//         res.redirect('/burgers');
//     });
// });

// //delete burger
// router.delete('/burgers/delete/:id', function(req, res) {
//     burger.deleteOne('burgers',req.params.id, function() {
//         res.redirect('/burgers');
//     })
// })

// //export
// module.exports = router;

//dependencies
// const express = require('express');
// const methodOverride = require('method-override');
// const bodyParser = require('body-parser');
// const router = express.Router();
// const burger = require('../models/burger.js')

//redirect to burger
router.get('/', function(req, res) {
    console.log("HI");
    res.redirect('/burgers');
});

//show burgers
router.get('/burgers', function(req, res) {
    burger.selectAll(function(data) {
        
        res.render('index', { burgers: data });
    });
});

//when route is burger/create run function
router.post('/burgers/create', function(req, res) {
    burger.insertOne('burger_name', req.body.name, function() {
        res.redirect('/burgers');
    })
})

//update route
router.put('/burgers/update/devour/:id', function(req, res) {
    burger.updateOne('burgers','devoured', req.params.id, function() {
        res.redirect('/burgers');
    })
})
//delete method available because method override
router.delete('/burgers/delete/:id', function(req, res) {
    burger.deleteOne('burgers',req.params.id, function() {
        res.redirect('/burgers');
    })
})
//initial load/direct
router.use(function(req, res) {
    res.redirect('/burgers');
})
//export
module.exports = router;


