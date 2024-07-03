var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hewwo, Kazal~!",
    user: "davihan11",
    added: new Date()
  },
  {
    text: "Huh",
    user: "kazal.blend",
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', function(req, res, next) {
    res.render('new', { title: 'New Message' });
    });

router.post('/new', function(req, res, next) {
    const { user, text } = req.body;
    messages.push({ text, user, added: new Date() });
    res.redirect('/');
});


module.exports = router;
