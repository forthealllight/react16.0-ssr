import express from 'express';
import React from 'react';
import {renderToString,renderToStaticMarkup} from 'react-dom/server';
import HomePage from '../src/components/homepage/index.js';
let app=express();
let server=app.listen(8080,()=>{
  let host=server.address().address;
  let port=server.address().port;
  console.log('server is start at',host,port);
});
//static
app.use('/dist',express.static('dist'));
app.get('/',(req,res)=>{
  res.write('<!DOCTYPE html><html><head><title>Hello HomePage</title></head><body>');
  res.write('<div id="app">');
  res.write(renderToString(<HomePage/>));
  res.write('</div></body>');
  res.write('<script type="text/javascript" src="../dist/vendor.bundle.js"></script><script type="text/javascript" src="../dist/js/app.js"></script>');
  res.write('</html>');
})
