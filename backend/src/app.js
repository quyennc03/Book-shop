import express from 'express'
import mongoose from 'mongoose';
import routerProduct from './routes/Product';
import routerCategory from './routes/Category';
import routerUser from './routes/Auth';
import routerOrder from './routes/Order';
import routerCart from './routes/Cart';
import routerOrderDetail from './routes/OrderDetail';
import routerVoucher from './routes/Voucher';
const app = express();


app.use(express.json())

app.use("/api", routerProduct)
app.use("/api", routerCategory)
app.use("/api", routerUser)
app.use("/api", routerOrder)
app.use("/api", routerCart)
app.use("/api", routerOrderDetail)
app.use("/api", routerVoucher)

mongoose.connect("mongodb://127.0.0.1:27017/book-shop")
export const viteNodeApp = app