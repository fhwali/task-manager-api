const mongoose = require('mongoose')
// const validator = require('validator')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true, 
//         trim: true
//     }, 
//     age: {
//         type: Number,
//         default:0,
//         validate(value) {
//             if (value < 0) {
//                 throw new Error ('Age must be a positive number')
//             }
//         }
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true, 
//         lowercase: true,
//         validate(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error ('Email is Invalid')
//             }
//         }
//     }
// })

// const me = new User ({
//     name: ' Fakhar     ',
//     age: 40,
//     email: 'FHWALI@GMAIL.COM'
// })

// me.save().then(() => {
//     console.log('My name is ', me)
// }).catch(() => {
//     console.log(error)
// })


// const Task = mongoose.model('Task', {
//     description: {
//         type: String
//     },
//     completed: {
//         type: Boolean
//     }
// })

// const task = new Task ({
// description: 'Learned the mongoose Lib',
// type: false

// })

// task.save().then(() => {
//     console.log(task)
// }).catch(() => {
//     console.log('error', error)
// })

