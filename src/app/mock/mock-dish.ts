import { Dish } from '../core/model/dish';
import { Notification } from '../core/model/notification';


export const DISHES: Dish[] = [{ id: 1, 
   name: "nduja", 
   description:"piccante!", 
   price: 0.3 },  
   { id: 1, 
      name: "friarielli", 
      description:"top!!", 
      price: 0.3 } ]

export const NOTIFICATIONS: Notification[] = [{
   id: Math.random().toString(),
   order: {
      at: new Date(),
      dishes: [{ id: 1, 
         name: "nduja", 
         description:"piccante!", 
         price: 0.3 },  
         { id: 1, 
            name: "friarielli", 
            description:"top!!", 
            price: 0.3 } ],
      payed : false,
   },
   created_at: new Date()
},
{
   id: Math.random().toString(),
   order: {
      at: new Date(),
      dishes: [{ id: 1, 
         name: "hamburger", 
         description:"good!", 
         price: 0.3 },  
         { id: 1, 
            name: "patate", 
            description:"very good!", 
            price: 0.3 } ],
      payed : true,
   },
   created_at: new Date()
}]