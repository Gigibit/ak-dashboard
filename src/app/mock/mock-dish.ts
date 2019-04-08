import { Dish } from '../core/model/dish';
import { Notification } from '../core/model/notification';
import { Table } from '../core/model/table';


export const DISHES: Dish[] = [{ id: '1', 
   name: "nduja", 
   description:"piccante!", 
   price: 0.3 },  
   { id: '1', 
      name: "friarielli", 
      description:"top!!", 
      price: 0.3 } ]

export const NOTIFICATIONS: Notification[] = [{
   id: Math.random().toString(),
   order: {
      at: new Date(),
      dishes: [{ id: '1', 
         name: "nduja", 
         description:"piccante!", 
         price: 0.3 },  
         { id: '1', 
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
      dishes: [{ id: '1', 
         name: "hamburger", 
         description:"good!", 
         price: 0.3 },  
         { id: '1', 
            name: "patate", 
            description:"very good!", 
            price: 0.3 } ],
      payed : true,
   },
   created_at: new Date()
}]


export const TABLES: Table[] = [{
   id: "ey31fjna3onoiadn",
   number: "39",
   seats: 2
},
{
   id: "ey31fjna3o412noiadn",
   number: "daoigna",
   seats:4
}]