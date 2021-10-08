const request = require('request');
const apiOptions = {
  server: 'http://localhost:3000'
};
const _renderHomepage = function(req, res, responseBody) {
  let message = null;
  if(!(responseBody instanceof Array)) {
    message = "API loop error.";
    responseBody = [];
  }
  else {
    if(!responseBody.length) {
      message = "No food found.";
    }
  }
  res.render('foodlist', { 
    foods: responseBody, 
    message: message
  }); 
};
const foodlist =  (req, res) => {
  const path = '/api/foods';
  const requestOptions = {
    url: apiOptions.server + path,
    method: 'GET',
    json: {}
  };
  console.log("index", res);
  console.log("request", req);
  request (
    requestOptions,
    // (err, response, body) => {
    //   _renderHomepage(req, res, body);
    // }
    function (err, response, body){
      _renderHomepage(req, res, body);
    }
  );
};

const _renderDetailPage = function(req, res, responseBody) {
     res.render('food-info', {
         currentFood: responseBody
     });
};

const foodInfo = function (req, res){
  const path = `/api/foods/${req.params.foodid}`;
  const requestOptions = {
    url: apiOptions.server + path,
    method: 'GET',
    json: {}
  };
  request(
    requestOptions,
    (err, response, body) => {
      _renderDetailPage(req, res, body);
    }
  );
};
 module.exports = {
     foodlist,
     foodInfo
 };
