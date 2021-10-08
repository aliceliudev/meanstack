const foodlist =  function(req, res, next) {
    res.render('foodlist', { title: 'Food list' });
  };

  const favouriteFood =  function(req, res, next) {
    res.render('favourite-food', { title: 'My favourtie food' });
  };

 module.exports = {
     foodlist,
     favouriteFood
 }; 
