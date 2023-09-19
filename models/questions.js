const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    // includes the array of comments for that particular post in postschema itself so that is faster to load comments of that particular posts
    options:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Options'
        }
    ]
},{
    timestamps:true
});

const Questions = mongoose.model('Questions',questionSchema);

module.exports = Questions;