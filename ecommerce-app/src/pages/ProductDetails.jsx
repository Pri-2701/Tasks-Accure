import { useParams } from "react-router-dom";
import { products } from "../services/productService";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div className="max-w-md mx-auto text-center">
      <img src={product.image} className="h-48 mx-auto" />
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
      <p className="text-gray-600">₹{product.price}</p>
    </div>
  );
};

export default ProductDetails;