const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let messageSchema = new Schema({
  Id_user1: {type: Schema.Types.ObjectId,
  ref: 'User',
},
  Id_user2: {type: Schema.Types.ObjectId,
  ref: 'User',
},
  text: String,
});

module.exports = mongoose.model("Message", messageSchema);