"use strict";

const mongoose = require('mongoose');

const Todo = mongoose.model('Todo', {
    text:{
      type: String,
      required: true,
      minlenght: 1,
      trim: true  
    },
    completed:{
        type: Boolean,
        requried: false,
        default: null
    }
});

module.exports = {Todo};