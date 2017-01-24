var Visualizer        = require('./models/visualizer');
const iconfile = require('./config/icons');
const icons = iconfile.icons;
var bodyParser = require('body-parser');


module.exports = function(app ) {
    app.use(bodyParser());
    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================

    app.options("/*", function(req, res, next){
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
      res.send(200);
    });

    app.get('/', function(req, res) {
        res.render('client/index.js'); // load the index.ejs file
    });


    app.get('/api/icons', (req,res) => {
      res.send(icons);
    });

    app.post('/api/createvisualizer', (req,res) => {

     res.set({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'text/javascript; charset=UTF-8',
        'Cache-Control': 'public, max-age=28800'
      });
    console.log(req.body);
      Visualizer.create(req.body,function(err,visualizer){
        if(!err){
            // if(process.env.NODE_ENV=='production'){
            //     res.redirect('/visualizer/'+visualizer._id);
            // } else {
            //     res.redirect('http://localhost:3000/visualizer/'+visualizer._id);
            // }
            res.send(visualizer);
        } else {
            console.error(err);
        }
      });
    });

    app.get('/api/visualizer/:id', function(req,res){
        res.set({
           'Access-Control-Allow-Origin': '*',
           'Content-Type': 'text/javascript; charset=UTF-8',
           'Cache-Control': 'public, max-age=28800'
         });
        Visualizer.findOne({_id:req.params.id},function(err,visualizer){
            if(!err){
                res.send(visualizer);
            }
        });
    });

    app.get('/api/visualizers', function(req,res){
      res.set({
         'Access-Control-Allow-Origin': '*',
         'Content-Type': 'text/javascript; charset=UTF-8',
         'Cache-Control': 'public, max-age=28800'
       });
      Visualizer.find({$and: [{title: {$ne:null }}, {title: {$ne:""}}] },function(err,data){
          if(!err){
            res.send(data);
          }
      });
    });
  


};