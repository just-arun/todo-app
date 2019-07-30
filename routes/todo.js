const { Router } = require("express");
const Item = require('./../models/Todo');;
const route = Router();


// get all data
route.get('/',(req,res)=>{
    Item.find({},(err,data)=>{
        if (err) {
            return err;
        }
        res.json({data});
    });
});

// send one user using _id
route.get('/:id',(req,res)=>{
    const _id = req.params.id;
    Item.find({_id},(err,data)=>{
        if (err) {
            return err;
        }
        res.json({data});
    });
})


// update user using put request
route.put('/:id',(req,res)=>{
    // id on parameter
    const _id = req.params.id;
    // title and body on body
    const { title, body } = req.body;
    Item.update({_id}, { title, body }, (err, data) => {
        if (err) {
            return err;
        }
        res.json({data});
    });
});


// create an item
route.post('/',(req,res)=>{
    const { title, body } = req.body;
    let itm = new Item;
    itm.title = title;
    itm.body = body;
    itm.save();
    res.json({data: "item added"});
});


module.exports = route;

