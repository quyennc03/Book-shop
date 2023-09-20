import { Routes, Route } from "react-router-dom"
import LayoutClient from "./components/layouts/layout-client/LayoutClient"
import HomePage from "./Pages/client/HomePage"
import 'swiper/css';
import AllCategory from "./Pages/client/AllCategory";
import ProductDetail from "./Pages/client/ProductDetail";
import Signin from "./Pages/client/Signin";
import Cart from "./Pages/client/Cart";
import Checkout from "./Pages/client/Checkout";
import ListProduct from "./Pages/admin/product/ListProduct";
import LayoutAdmin from "./components/layouts/layout-admin/LayoutAdmin";
import ListCategory from "./Pages/admin/category/ListCategory";
import AddCategory from "./Pages/admin/category/AddCategory";
import UpdateCategory from "./Pages/admin/category/UpdateCategory";
import AddProduct from "./Pages/admin/product/AddProduct";
import UpdateProduct from "./Pages/admin/product/UpdateProduct";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutClient></LayoutClient>}>
        <Route index element={<HomePage></HomePage>}></Route>
        <Route path="/all-category" element={<AllCategory></AllCategory>}></Route>
        <Route path="/productDetail" element={<ProductDetail></ProductDetail>}></Route>
        <Route path="/signin" element={<Signin></Signin>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
      </Route>
      <Route path="/admin" element={<LayoutAdmin></LayoutAdmin>}>
        <Route index element={<ListProduct></ListProduct>}></Route>
        <Route path="/admin/category" element={<ListCategory></ListCategory>}></Route>
        <Route path="/admin/add-product" element={<AddProduct></AddProduct>}></Route>
        <Route path="/admin/update-product/:id" element={<UpdateProduct></UpdateProduct>}></Route>
        <Route path="/admin/add-category" element={<AddCategory></AddCategory>}></Route>
        <Route path="/admin/update-category/:id" element={<UpdateCategory></UpdateCategory>}></Route>
      </Route>
    </Routes>
  )
}

export default App
