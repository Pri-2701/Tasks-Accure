import ProductList from "./ProductList";

const Home = () => (
  <>
    <div className="text-center mb-10">
      <h1 className="text-4xl font-bold">Welcome to E-Shop</h1>
      <p className="text-gray-600 mt-2">
        Buy quality products at best prices
      </p>
    </div>
    <ProductList />
  </>
);

export default Home;