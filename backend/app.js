const express = require(`express`);
const cors = require(`cors`);
const morgan = require(`morgan`);
const productRoutes = require('./routes/productRoutes');
const authRoutes = require(`./routes/authRoutes`);

const app = express();
app.use(cors());
app.use(express.json());

app.use(morgan(`dev`));

app.use('/api/products', productRoutes);
app.use(`/api/auth`,authRoutes);//ראוטר לאימות

app.get(`/`,(req,res)=>{
    res.send(`API is running :)`);
});

module.exports=app;