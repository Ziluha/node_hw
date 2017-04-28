var express = require('express');
var app = express();

app.use('/', (req, res)=>{
    res.end('Hello world and nodejs');
});
app.listen(process.env.PORT||3030, () => console.log('Hello world and zyabls'));