import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [form, setForm] = useState({
    name: '',
    card: '',
    expiry: '',
    cvv: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('checkoutCart')) || [];
    if (!stored.length) {
      navigate('/cart');
    } else {
      setCartItems(stored);
    }
  }, [navigate]);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    alert('Payment successful!');
    localStorage.removeItem('cart');
    localStorage.removeItem('checkoutCart');
    navigate('/');
  };

  return (
    <div className="p-6 max-w-xl mx-auto" style={{ height: '100vh' }}>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Checkout</h2>

      <div className="space-y-3 mb-6">
        {cartItems.map((item, index) => (
          <div key={index} className="border p-3 rounded shadow">
            <div className="flex justify-between">
              <span>{item.title}</span>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className="text-xl font-bold text-right mt-2">Total: ${total.toFixed(2)}</div>
      </div>

      <form onSubmit={handlePayment} className="space-y-4">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Cardholder Name"
          required
          className="w-full border px-4 py-2 rounded"
        />
        <input
          type="text"
          name="card"
          value={form.card}
          onChange={handleChange}
          placeholder="Card Number"
          required
          maxLength={16}
          className="w-full border px-4 py-2 rounded"
        />
        <div className="flex gap-4">
          <input
            type="text"
            name="expiry"
            value={form.expiry}
            onChange={handleChange}
            placeholder="MM/YY"
            required
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="password"
            name="cvv"
            value={form.cvv}
            onChange={handleChange}
            placeholder="CVV"
            required
            maxLength={3}
            className="w-full border px-4 py-2 rounded"
          />
        </div>
        <button type="submit" className="bg-black text-white px-4 py-2 rounded w-full hover:bg-gray-900 mt-4">
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Checkout;
