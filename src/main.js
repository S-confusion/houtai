const { APP_PORT } = require('./config/config.default.js')
// console.log(APP_PORT, 'APP_PORT');
const app = require('./app')
app.listen(APP_PORT, () => {
    console.log('server is running on http://localhost:8080');
})