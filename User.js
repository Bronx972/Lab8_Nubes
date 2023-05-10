var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  nombre: String,
  apellido: String,
  edad:String,
  pais: String,
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');