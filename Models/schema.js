const mongoose=require('mongoose')

const schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    tech:{
        type:String,
        required:true

    },
    locality:{
        type:String,
        required:true,
        default:"vwmd"
    },
    sub:{
        type:Boolean,
        required:true,
        default:false
    }

})
module.exports=mongoose.model('details',schema)