// _id - don't have to state that, it happens automatically w/ Mongoose
// title : String
// colors: [String]
// shapes: [String]


var mongoose = require('mongoose');
// define the schema for our Log model
var vizSchema = mongoose.Schema({
        title       : String,
        colors      : 	{	                z: String,
        					x: String,
        					c: String,
        					v: String,
        					b: String,
        					n: String,
        					m: String,
        			 	},
        shapes      : {		q: String,
        					w: String,
        					e: String,
        					r: String,
        					t: String,
        					y: String,
        					u: String,
        					i: String,
        					o: String,
        					p: String
        			 	}
});


module.exports = mongoose.model('Visualizer', vizSchema);