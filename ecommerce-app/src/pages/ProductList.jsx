import ProductCard from "../components/ProductCard";
import { products } from "../services/productService";

const ProductList = () => (
  <>
    <h2 className="text-2xl font-bold mb-6">Products</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  </>
);

export default ProductList;