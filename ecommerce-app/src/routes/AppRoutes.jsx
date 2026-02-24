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

import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";

import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>

      {/* Public Route */}
      <Route path="/login" element={<Login />} />

      {/* Protected Routes */}
      <Route
        path="/"
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

      {/* 404 Page */}
      <Route
        path="*"
        element={<h1 className="text-center mt-20 text-3xl">404 - Page Not Found</h1>}
      />

    </Routes>
  );
};

export default AppRoutes;


