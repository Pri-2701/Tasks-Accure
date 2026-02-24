import { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Laptop", price: 50000, quantity: 1 },
    { id: 2, name: "Mobile", price: 20000, quantity: 1 },
  ]);

  const increaseQty = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  };

  const decreaseQty = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-20 text-xl">
        🛒 Your cart is empty
      </div>
    );
  }

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border p-4 rounded-lg shadow"
          >
            <div>
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-600">
                ₹{item.price} × {item.quantity}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => decreaseQty(item.id)}
                className="px-3 py-1 bg-gray-300 rounded"
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => increaseQty(item.id)}
                className="px-3 py-1 bg-gray-300 rounded"
              >
                +
              </button>

              <button
                onClick={() => removeItem(item.id)}
                className="px-4 py-1 bg-red-500 text-white rounded"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total Section */}
      <div className="mt-8 text-right">
        <h3 className="text-2xl font-bold">
          Total: ₹{totalPrice}
        </h3>

        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;