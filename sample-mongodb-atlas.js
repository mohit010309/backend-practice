// connecting to mongodb atlas and creating database
const mongoose=require('mongoose');

mongoose.connect("mongodb+srv://mohitakhouri83:mohit090301@cluster0.h4zap3z.mongodb.net/itemsDB?retryWrites=true&w=majority");

const itemSchema = new mongoose.Schema({
    name:String,
    price:Number
});

const itemModel = mongoose.model("item",itemSchema);

const item1= new itemModel({
    name:"Kurkure",
    price:20
});

const item2= new itemModel({
    name:"Trimax pen",
    price:100
});

const item3= new itemModel({
    name:"Samsung TV",
    price:100000
});

const newItems = [item1,item2,item3];

// itemModel.insertMany(newItems);
const new_item = new itemModel({
    name:"Dressing Table",
    price:34000
});
// new_item.save().then(function(){
//     console.log("Item saved");
//     itemModel.find({}).then(function(logs){
//         console.log(logs);
//     });
// });

// finding the items and printing the items
// itemModel.find({}).then(function(logs){
//     console.log(logs);
// });

itemModel.estimatedDocumentCount().then(function(logs){
    console.log(logs);
});