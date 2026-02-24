import { formatPrice } from "../utils/formatPrice"

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg">
      <img src={product.image} className="h-40 mx-auto" />
      <h2 className="font-semibold mt-2">{product.title}</h2>
      <p className="text-sky-600">{formatPrice(product.price)}</p>
      <button className="mt-2 w-full bg-sky-500 text-white py-1 rounded">
        Add to Cart
      </button>
    </div>
  )
}