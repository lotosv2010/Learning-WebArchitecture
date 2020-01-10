const mongoose = require('mongoose')
const {
    Schema
} = mongoose
mongoose.connect('mongodb://root:123456@localhost:27017/weixin', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('Mongodb connected..')
})
exports.ServerToken = mongoose.model('ServerToken', {
    accessToken: String
});