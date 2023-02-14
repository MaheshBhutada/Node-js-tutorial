const express = require('express');

const { products } = require('./data.js');

const app = express();

// app.get('/api/view/query',(req,res) =>{
//     console.log(req.query);
//     res.send("<h1> hello this is my first querry </h1>");
// })

// condition for serach and limit pass by user.

app.get('/api/view/query',(req,res) =>{
    // console.log(req.query);
    const { search,limit } = req.query;
    
    let sortProduct = [...products];

    if(search){
        sortProduct = sortProduct.filter((product)=>{
            return product.name.startsWith(search);
        })
    }

    if(limit){
        sortProduct = sortProduct.slice(0,Number(limit));
    }
    
    console.log('Search : '+ search + " " + 'limit : '+ limit);
    res.status(200).json(sortProduct);
})


app.listen(4000,()=>{
    console.log('server is listing to port 4000...');
})