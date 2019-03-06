
// Get dependencies
const express = require('express');
var app = express();
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

app.listen(port);


// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



func = function(req, res)
{
http.get('http://api.eatstreet.com/publicapi/v1/restaurant/2d2dbb0627fd709ff15b4f2e73e76180e6a1c20b08aa17b4/menu?access-token=6fedd5ed1cda53b1'
    ,(resp) => {
        let data = '';
      
        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
          data += chunk;
        });
      
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
          // console.log(data);
        res.json(JSON.parse(data));

        });  
  
    });

    

    
}


app.route('/rest')
.get(func);