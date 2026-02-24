import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="bg-sky-600 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">E-Shop</h1>
        <nav className="space-x-6">
          <Link className="hover:text-yellow-300" to="/">Home</Link>
          <Link className="hover:text-yellow-300" to="/products">Products</Link>
          <Link className="hover:text-yellow-300" to="/cart">Cart</Link>
          <Link className="hover:text-yellow-300" to="/login">Login</Link>
        </nav>
      </div>
    </header>
  )
}