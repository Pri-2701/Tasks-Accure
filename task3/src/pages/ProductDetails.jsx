import { useParams } from "react-router-dom";
import { getProducts } from "../services/productService";

const ProductDetails = () => {
  const { id } = useParams();
  const product = getProducts().find(p => p.id === Number(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl">{product.title}</h2>
      <p className="text-green-600 text-xl">₹{product.price}</p>
    </div>
  );
};

export default ProductDetails;