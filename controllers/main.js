exports.index = function(req, res){
  res.render('main/index.jade', { title: 'Route Separation Example' });
};