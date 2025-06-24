import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setItems(cartItems);
  }, []);

  const total = items.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    if (items.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    localStorage.setItem('checkoutCart', JSON.stringify(items));
    navigate('/checkout');
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
    localStorage.setItem('cart', JSON.stringify(newItems));
  };

  return (
    <div className="p-6" style={{ height: '100vh' }}>
      <h2 className="text-2xl font-bold mb-4 text-gray-800 mt-4">Your Cart</h2>
      {items.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div>
          {items.map((item, index) => (
            <div key={index} className="border p-4 mb-3 rounded flex justify-between items-center">
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p>${item.price}</p>
              </div>
              <button
                className="text-sm bg-black text-white px-3 py-1 rounded"
                onClick={() => removeItem(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4 text-xl font-bold">Total: ${total.toFixed(2)}</div>
          <button onClick={handleCheckout} className="mt-4 w-full bg-black text-white py-2 rounded">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
