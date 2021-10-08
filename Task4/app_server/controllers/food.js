const foodlist =  function(req, res, next) {
  {
    res.render('foodlist', { 
      pageHeader: {
        title: 'Food list'
      },
      foodArray: [ 
        {
          imgName: 'images/p1.png',
          name: 'Chao Mian',
          rating: 5,
          type: 'Breakfast'
        },
        {
          imgName: 'images/p3.png', 
          name: 'Roasted Chicken',
          rating: 5,
          type: 'Lunch'  
        },
        {
          imgName: 'images/p2.png',
          name: 'Walnut salad',
          rating: 3,
          type: 'Afternoon snack' 
        },
        {
          imgName: 'images/p4.png',
          name: 'Spring Rolls',
          rating: 4,
          type: 'Dinner' 
        }
      ]
    });
  };
}

  const favouriteFood =  function(req, res, next) {
    res.render('favourite-food', { 
      title: 'My favourite food',
      myFavFood: [ 
        {
           imgName: 'images/p1.png',
           name: 'Chao Mian',
           ingredient:'Main ingredient: egg and noodles',
           calories:'Calories: 300 per serve',
           cookingTime: ' Cooking time: 20 minutes',
           cookingDifficulities: 'Cooking difficulites: medium',
           deliveryPrice:'Delivery price: $12.5',
           type: 'Breakfast'  
        },
        {
          imgName: 'images/p5.png',
          name: 'Salad',
          ingredient:'Main ingredient: veggies',
          calories:'Calories: 150 per serve',
          cookingTime: ' Cooking time: 10 minutes',
          cookingDifficulities: 'Cooking difficulites: easy',
          deliveryPrice:'Delivery price:$10.5',
          type: 'Afternoon snack'  
        },
        {
          imgName: 'images/p6.png',
          name: 'Fish Soup',
          ingredient:'Main ingredient: fish',
          calories:'Calories: 400 per serve',
          cookingTime: ' Cooking time: 120 minutes',
          cookingDifficulities: 'Cooking difficulites: hard',
          deliveryPrice:'Delivery pric: $22.5',
          type: 'Dinner'  
        },
        {
          imgName: 'images/p3.png',
          name: 'Shanghai Roasted Chicken',
          ingredient:'Main ingredient: chicken',
          calories:'Calories: 500 per serve',
          cookingTime: ' Cooking time: 140 minutes',
          cookingDifficulities: 'Cooking difficulites: hard',
          deliveryPrice:'Delivery price: $24.5',
          type: 'Lunch'  
      }
    ]
    
    
    
    
    });
  };

 module.exports = {
     foodlist,
     favouriteFood
 }; 

