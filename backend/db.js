const mongoose = require('mongoose');

function DBConnect() {
    const url=process.env.URL;
    mongoose.connect(url);
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        console.log('DB connected...');
    });
}

module.exports = DBConnect;