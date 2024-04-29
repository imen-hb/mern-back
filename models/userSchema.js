// require mongoose
const mongoose = require('mongoose')

// get schema
const Schema = mongoose.Schema

// create user schema
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone : Number,

},
{
    timestamps: true
}
)

// export schema
module.exports = User = mongoose.model('user', userSchema)