const toastr = require("toastr")
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const {Explore} = require("./exploreSchema.js")
const bodyParser = require("body-parser")

app.use(express.static("public"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// let path = require('path')

// app.set('views', path.join(__dirname, 'views'));

// app.use(express.static(path.join(__dirname, "js")));

app.set("view engine", "ejs")

mongoose.connect('mongodb://127.0.0.1:27017/hotel')

const {Schema} = mongoose

const itemSchema = new Schema({
    serialNo: String,
    name: String,
    price: String,
    title: String,
    image: String
})



const Item = mongoose.model("Item", itemSchema)


const component1 = new Item ({
    serialNo: "05",
    name: "Asian Cafee",
    price: "$4.59",
    title: "Best for the snacks",
    image: "/images/cafee-5-modified.png"
})




// component1.save()

// const mongoComponent = {component1, component2, component3, component3}

// const components = [

//         {
//             componentNumber: "01",
//             componentName: "Asia Beast",
//             componentPrice: "$62.99",
//             componentTitle: "The best and luxurious hotel you can get"
//         },

//         {
//             componentNumber: "01",
//             componentName: "Asia Beast",
//             componentPrice: "$62.99",
//             componentTitle: "The best and luxurious hotel you can get"
//         },

//         {
//             componentNumber: "01",
//             componentName: "Asia Beast",
//             componentPrice: "$62.99",
//             componentTitle: "The best and luxurious hotel you can get"
//         }
    
// ] 







app.get("/", (req,res)=>{

    Item.find({})
    .then(function(foundItems){
        res.render('index',{foundItems})
    })
    .catch(function(err){
        console.log(err)
    })

})


app.get("/details",(req,res)=>{
    Item.find({})
    .then(function(foundItems){
        res.render("details", {foundItems})
    })
    .catch(function(err){
        console.log(err)
    })
})


app.get("/explore", (req, res)=>{
    Explore.find({})
    .then(function(foundExplore){
        res.render("explore", {foundExplore})
    })
    .catch((err)=>{
        console.log(err)
    })
})


app.get("/add-coffee", (req,res)=>{
    res.render("add-coffee")
})



app.post("/buy", (req,res)=>{
    const _id = (req.body.info)

    Explore.find({_id: _id})
    .then((buyItems)=>{
        res.render("buy", {buyItems})
    })
    .catch((err)=>{
        console.log(err)
    })
})





app.listen("3000", ()=>{
    console.log("server started on port 3000")
})