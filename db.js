const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ricardoguerrero:<8MjRX7TpFUzH4usR>@cluster0.5d815xp.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(db => console.log('Database is connected'));