const bookList =  function(req, res, next) {
  {
    res.render('list-display', { 
      pageHeader: {
        title: 'Books in the store',
        des: 'Enjoy all kinds of books'
      },
      bookArray: [ 
        {
          imgName: 'images/1.jpg',
          name: 'Dinosaur Lady',
          author: 'Linda Skeers',
          price: '$10', 
          bookStatus:[{
             stat: 'Out of sale',
             rating: 5,
             discount: '20% off',
             bookform: 'eText'
           },
           {
            stat: 'On sale',
            rating: 4,
            discount: '10% off',
            bookform: 'hardcover'
          }]                            
        },
        {
          imgName: 'images/2.jpg',
          name: 'The Crows of Pearblossom',
          author: 'Aldous Huxley',
          price: '$18', 
          bookStatus:[{
            stat: 'Out of sale',
            rating: 5,
            discount: '10% off',
            bookform: 'paper book'
          },
          {
           stat: 'On sale',
           rating: 5,
           discount: '20% off',
           bookform: 'hardcover'
         }]
        },
        {
          imgName: 'images/3.jpg',
          name: 'Guess How much I love you',
          author: 'Sam McBratney',
          price: '$28', 
          bookStatus:[{
            stat: 'On sale',
            rating: 5,
            discount: '20% off',
            bookform: 'paper book'
          },
          {
           stat: 'Out of sale',
           rating: 4,
           discount: '10% off',
           bookform: 'hardcover'
         }]
        }        
      ]
    });
  };
}

  const popularBook =  function(req, res, next) {
    res.render('display', { 
      title: 'My favourite book',
      popBook: [ 
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
     bookList,
     popularBook
 }; 

