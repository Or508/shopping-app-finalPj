require(`dotenv`).config();
const app = require(`./app`);
const connectDB = require(`./config/db`);

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes'); // ✅ הוסף שורה זו

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes); // ✅ הוסף שורה זו

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ server is running on http://localhost:${PORT}`);
  });
});
