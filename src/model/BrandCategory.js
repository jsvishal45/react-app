import React, { Component } from 'react';

class BrandCategory extends Component {
  
    getCategory(){
      return [
                {
                  name : "Men's Fashion",
                  count : 1201,
                  id:1
                },
                {
                  name : "Women's Fashion",
                  count : 21,
                  id:2
                },
                {
                  name : "Electronics",
                  count : 11,
                  id:4
                }
                ,
                {
                  name : "Home & Kitchen",
                  count : 121,
                  id:5
                },
                {
                  name : "Baby, Kids & Toys",
                  count : 120,
                  id:6
                },
                {
                  name : "Stationery",
                  count : 101,
                  id:7
                }

      ]
   }


   getBrand(){
      return [
                {
                  name : "Classic Polo",
                  count : 101,
                  id:1
                },
                {
                  name : "Rebook",
                  count : 17,
                  id:2
                },
                {
                  name : "US polo",
                  count : 661,
                  id:3
                },
                {
                  name : "Flying Machine",
                  count : 16,
                  id:4
                },
                {
                  name : "Nike",
                  count : 121,
                  id:5
                },
                {
                  name : "Puma",
                  count : 901,
                  id:6
                }

            ];
    }
    getPopular(){
      return [
                {
                  name : "Books"
                  
                },
                {
                  name : "Electic Bike"
                  
                },
                {
                  name : "Vivo Mobiles"
                 
                },
                {
                  name : "Iphone"
                 
                },
                {
                  name : "Iphone X"
                 
                },
                {
                  name : "Samsung"
                }

            ];
    }
}

export default new BrandCategory();
