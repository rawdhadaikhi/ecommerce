import bcrypt from 'bcryptjs';

const data = {
    users :[
        {
           name : 'rawdha',
           email :'admin@example.com',
           password : bcrypt.hashSync('1234' , 8), 
           isAdmin :true
        },
        {
            name : 'john',
            email :'user@example.com',
            password : bcrypt.hashSync('1234' , 8), 
            isAdmin :false
         },
    ],
    products :[
     {
       
         name : 'rose',
         category :'fleur',
         image: '/images/product-3.jpg',
         price :55 ,
         countInStock:10,
         brand : 'plante reelle',
         rating:4.5,
         numReviews:10,
         description: 'plante sensible ,a ne pas exposé trop au soliel'
     },
     {
      
        name : 'cactus',
        category :'fleur',
        image: '/images/product-1.jpg',
        price :40 ,
        countInStock:20,
        brand : 'cactus vert',
        rating:4.0,
        numReviews:8,
        description: 'plante sensible ,a ne pas exposé trop au soliel'
    },
    {
       
        name : 'plante',
        category :'fleur',
        image: '/images/product-4.jpg',
        price :55 ,
        countInStock:5,
        brand : 'plante reelle',
        rating:3.5,
        numReviews:6,
        description: 'plante sensible ,a ne pas exposé trop au soliel'
    },
    {
     
        name : 'fleur',
        category :'fleur',
        image: '/images/product-2.jpg',
        price :70 ,
        countInStock:0,
        brand : 'plante reelle',
        rating:5,
        numReviews:9,
        description: 'plante sensible ,a ne pas exposé trop au soliel'
    },
    {
     
        name : 'green plant',
        category :'fleur',
        image: '/images/product-5.jpg',
        price :45 ,
        countInStock:12,
        brand : 'plante reelle',
        rating:5,
        numReviews:11,
        description: 'plante sensible ,a ne pas exposé trop au soliel'
    }
]
};
export default data;