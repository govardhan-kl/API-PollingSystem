const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
    text:{
        type: String,
        required: true
    },
    question:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Questions'
    },
    votes:{
        type: Number,
        default: 0
    },
    add_votes:{
        type: String
    }
},{
    timestamps:true
});

const Options = mongoose.model('Options',optionSchema);

module.exports = Options;