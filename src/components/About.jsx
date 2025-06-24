import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="container my-5">
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold">About Shopin</h1>
        <p className="text-muted">Fashion. Function. Fragrance. Everything you love, all in one place.</p>
      </div>

      {/* Our Story Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="https://plus.unsplash.com/premium_photo-1664910125402-7972b1e12b79?fm=jpg&q=60&w=3000"
            alt="Shopin Store"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h3 className="mb-3">Our Journey</h3>
          <p>
            Shopin started with a simple mission: to deliver a diverse range of lifestyle products — from stylish clothes and timeless bags to fragrances and eyewear — all at affordable prices.
          </p>
          <p>
            Today, we collaborate with trusted suppliers and trendsetters worldwide to ensure you get the best of fashion and function at your fingertips.
          </p>
        </div>
      </div>

      {/* Our Categories Section */}
      <div className="mb-5">
        <h3 className="text-center mb-4">Our Top Categories</h3>
        <div className="row text-center">
          <div className="col-md-3 mb-4">
            <div className="p-4 border rounded">
              <h5>Clothing</h5>
              <p>Stylish collections for men, women, and kids — from casual to classy.</p>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="p-4 border rounded">
              <h5>Fragrances</h5>
              <p>Captivating scents to match your mood and personality.</p>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="p-4 border rounded">
              <h5>Eyewear</h5>
              <p>Trendy sunglasses and reading glasses that redefine your look.</p>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="p-4 border rounded">
              <h5>Bags</h5>
              <p>Functional and fashionable bags for every occasion.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h4 className="mb-3">Be a Part of the Shopin Family</h4>
        <p className="text-muted mb-4">Discover top deals and new arrivals. Shop with ease and style.</p>
        <Link to="/store" className="btn btn-dark px-4">Start Shopping</Link>
      </div>
    </div>
  );
}
