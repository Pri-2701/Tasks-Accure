import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";

const ProductCard = ({ product }) => (
  <div className="border rounded-lg p-4 text-center shadow">
    <img
      src={product.image}
      alt={product.name}
      className="h-32 mx-auto"
    />
    <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
    <p className="text-gray-600">{formatPrice(product.price)}</p>

    <Link
      to={`/product/${product.id}`}
      className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded"
    >
      View
    </Link>
  </div>
);

export default ProductCard;
