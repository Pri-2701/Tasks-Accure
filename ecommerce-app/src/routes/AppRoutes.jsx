// import { Routes, Route } from "react-router-dom";
// import Home from "../pages/Home";
// import ProductList from "../pages/ProductList";
// import ProductDetails from "../pages/ProductDetails";
// import Cart from "../pages/Cart";
// import Checkout from "../pages/Checkout";
// import Login from "../pages/Login";




// const AppRoutes = () => (
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/products" element={<ProductList />} />
//     <Route path="/product/:id" element={<ProductDetails />} />
//     <Route path="/cart" element={<Cart />} />
//     <Route path="/checkout" element={<Checkout />} />
//     <Route path="/login" element={<Login />} />

//   </Routes>
// );

// export default AppRoutes;





// src/routes/AppRoutes.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import ProductList from "../pages/ProductList";
import ProductDetails from "../pages/ProductDetails";
import Checkout from "../pages/Checkout";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => (
  <Routes>
       
    
     {/* Public Routes */}
   <Route path="/" element={<Register />} />
    <Route path="/login" element={<Login />} />

    {/* Protected Routes */}
    <Route
      path="/home"
      element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      }
    />

    <Route
      path="/products"
      element={
        <ProtectedRoute>
          <ProductList />
        </ProtectedRoute>
      }
    />

    <Route
      path="/product/:id"
      element={
        <ProtectedRoute>
          <ProductDetails />
        </ProtectedRoute>
      }
    />

    <Route
      path="/cart"
      element={
        <ProtectedRoute>
          <Cart />
        </ProtectedRoute>
      }
    />

    <Route
      path="/checkout"
      element={
        <ProtectedRoute>
          <Checkout />
        </ProtectedRoute>
      }
    />

    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default AppRoutes;




