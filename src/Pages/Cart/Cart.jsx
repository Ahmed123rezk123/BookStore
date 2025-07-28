import React from "react";
import { useCart } from "../../hooks/useCart";

import { HiPlus, HiMinus, HiTrash } from "react-icons/hi";

function Cart() {
  const { cartItems, increaseQty, decreaseQty, removeItem } = useCart();

  const getTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-[#f7a72f]">🛒 Your Cart</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-xl overflow-hidden">
          <thead className="bg-amber-200 text-left text-gray-700 text-sm uppercase">
            <tr>
              <th className="px-6 py-4">Product</th>
              <th className="px-6 py-4">Price</th>
              <th className="px-6 py-4">Quantity</th>
              <th className="px-6 py-4">Subtotal</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-t hover:bg-gray-50">
                <td className="flex items-center px-6 py-4 space-x-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <span className="font-medium text-gray-800">
                    {item.title}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-600">${item.price}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="p-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      <HiMinus />
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="p-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      <HiPlus />
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 text-blue-600 font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <HiTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-right mt-6 text-xl font-bold">
        Total: ${getTotal().toFixed(2)}
      </div>
    </div>
  );
}

export default Cart;
