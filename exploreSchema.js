const mongoose = require("mongoose")
const {Schema} = mongoose

const exploreSchema = new Schema({
    name:String,
    image:String,
    price: String,
    extension: String
})

const Explore = mongoose.model("Explore", exploreSchema)

// Explore.insertMany([
//     {name: "Coffee Ultimate", image: "/images/explore/explore-2.jpeg", price:"$2.99", extension:"Good for try" },
//     {name: "Coffee One", image: "/images/explore/explore-2.jpeg", price:"$3.49", extension:"One that everybody loves" },
//     {name: "Dalgona Coffee", image: "/images/explore/explore-3.jpeg", price:"$6.99", extension:"Best korean dalgona" },
//     {name: "Coffee Treat", image: "/images/explore/explore-4.jpeg", price:"$3.69", extension:"Treat that everyone wants" }
// ])
// .then(function(){
//     console.log("inserted")
// })
// .catch(function(err){
//     console.log(err)
// })

module.exports = {Explore}