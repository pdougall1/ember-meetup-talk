json = {"posts":[
  { id: 0, title: 'Ember is great!', body: 'O how I love Ember.  Let me count the ways.' },
  { id: 1, title: 'Ember makes classes with JS', body: 'Interesting how the ember core team was able to make classes and classical inheritance with POJOs!' },
  { id: 2, title: 'Chrome has a great debugging tool!', body: 'Great how easily it is to move around in the code as it runs!  We can go as deep into the stack as we want!' }
]}

module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();
  postsRouter.get('/', function(req, res) {
    res.send(json);
  });
  app.use('/api/posts', postsRouter);
};



