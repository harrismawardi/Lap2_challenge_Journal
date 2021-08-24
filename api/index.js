const app = require('./server');

const port = process.env.PORT || 5000;

app.listen(port, () => 
    console.log(`All aboard! Express now departing from http://localhost:${port}. Choo choo!!`))