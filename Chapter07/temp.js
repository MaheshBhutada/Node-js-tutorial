const express = require('express');

const { products } = require('./data.js');
const app = express();

app.get('/',(req,res)=>{

    // here we are sharing the needed details with user.
    const newProduct = products.map((product)=>{
        const {id,name,image,desc} = product;
        return {id,name,image,desc};
    })
    res.json(newProduct);
})

// find a specific entry according to id 
app.get('/api/products/:productId',(req,res)=>{
    const {productId} = req.params;
    console.log(productId);

    const newProduct1 = products.find((product)=> product.id === Number(productId));

    if(!newProduct1){
        return res.status(404).send("Product is not found");
    }
    
    return res.json(newProduct1);
})

// find a reviw of a specfic product.
app.get('/api/products/:productId/reviews/:reviewId',(req,res) => {
    const {reviewId} = req.params;

    console.log(reviewId);
    
    res.send("Hello this is a good product");
})


app.listen(4000, ()=>{
    console.log('Serever is listing to port 4000...');
})