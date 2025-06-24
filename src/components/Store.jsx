import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CATEGORIES = [
    { label: "Men's Shirts", value: "mens-shirts" },
    { label: "Men's Shoes", value: "mens-shoes" },
    { label: "Men's Watches", value: "mens-watches" },
    { label: "Women's Dresses", value: "womens-dresses" },
    { label: "Women's Shoes", value: "womens-shoes" },
    { label: "Tops", value: "tops" },
    { label: "Bags", value: "bags" },
    { label: "Sunglasses", value: "sunglasses" },
    { label: "Fragrances", value: "fragrances" },
    { label: "Skincare", value: "skincare" },
    { label: "Kids (Mocked)", value: "kids" },
];

const MOCK_KIDS_PRODUCTS = [
    {
        id: 201,
        title: "Kids T-Shirt",
        price: 499,
        description: "Soft cotton T-shirt for kids",
        image: "https://via.placeholder.com/200x200.png?text=Kids+Tee"
    },
    {
        id: 202,
        title: "Kids Jeans",
        price: 899,
        description: "Stretchable denim jeans for kids",
        image: "https://via.placeholder.com/200x200.png?text=Kids+Jeans"
    }
];

const Store = () => {
    const [category, setCategory] = useState('mens-shirts');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        if (category === 'kids') {
            setProducts(MOCK_KIDS_PRODUCTS);
            setLoading(false);
            return;
        }

        fetch(`https://dummyjson.com/products/category/${category}`)
            .then(res => res.json())
            .then(data => setProducts(data.products))
            .catch(err => console.error('Error fetching data:', err))
            .finally(() => setLoading(false));
    }, [category]);

    const handleAddToCart = (product) => {
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        const updatedCart = [...existingCart, product];
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        alert(`${product.title} added to cart`);
    };

    const handleBuyNow = (product) => {
        localStorage.setItem('checkoutCart', JSON.stringify([product]));
        navigate('/checkout');
    };

    return (
        <div className="p-6 min-h-[60vh]"  style={{ minHeight: 'calc(100vh - 80px)' }}>
            <h1 className="text-3xl font-bold mb-4 text-gray-800 mt-4">Collections</h1>

            <div className="mb-4">
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border px-4 py-2 rounded shadow"
                >
                    {CATEGORIES.map(cat => (
                        <option key={cat.value} value={cat.value}>{cat.label}</option>
                    ))}
                </select>
            </div>

            {loading ? (
                <p>Loading products...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {products.map(product => (
                        <div key={product.id} className="border p-4 rounded-lg shadow hover:shadow-md">
                            <img
                                src={product.thumbnail || product.image}
                                alt={product.title}
                                className="h-48 w-full object-contain mb-3"
                            />
                            <h3 className="font-semibold text-lg mb-1">{product.title}</h3>
                            <p className="text-sm text-gray-600 mb-2">${product.price}</p>
                            <p className="text-sm mb-2">{product.description.slice(0, 100)}...</p>
                            <div className="flex gap-2 mt-2">
                                <button
                                    onClick={() => handleAddToCart(product)}
                                    className="bg-black text-white px-3 py-1 rounded"
                                >
                                    Add to Cart
                                </button>
                                <button
                                    onClick={() => handleBuyNow(product)}
                                    className="bg-black text-white px-3 py-1 rounded"
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Store;
