const mongoose=require(`mongoose`);
const Product = require("./Product");
const Product = require("./Product");
const  cartItemSchema= new mongoose.Schema({
    Product:{type:mongoose.Schema.Types.ObjectId,ref:Product,reuired:true},
    quantity:{type:Number,default:1,min:1},
    addedAt:{type:Date,default:Date.now}
});

const cartSchema=new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId , ref:`User`,require:true , unique:true},
    items:[cartItemSchema],
    totalPrice:{type:Number,default:0}
});


//חישוב אוטומתי של מחיר לפני שמירה
cartSchema.pre(`save`,async (next) => {
    let total=0;
    for(const item of this.item){
        const Product=await mongoose.model(`Product`).findById(item.Product);
        if (Product) {
            total+=Product.price*item.quantity;
        }
    }
this.totalPrice=total;
next();
});

module.exports=mongoose.Schema(`Cart`,cartSchema)