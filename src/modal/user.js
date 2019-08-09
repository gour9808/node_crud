const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email : {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error("email is invalid")
            }
        }
    },
    password: {
        type: String,
        required:true,
        minlength: 7
    },
    age : {
        type: Number,
        default: 0,
        validate(value) {
            if(value<0) {
                throw new Error("age must be positive no")
            }
    }
}
})

module.exports = User;