import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Main() {
  const navigate = useNavigate();

  return (
    <div className='container'>
      <div className="welcome-section my-5 d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="welcome-p mb-4 mb-md-0">
          <h1>Welcome to Shopin...</h1>
          <p><i>We provide you with a variety of clothing brands that are popular in the market at an affordable cost.</i></p>
          <button id="btn" className="btn btn-dark mt-2" onClick={() => navigate('/store')}>Check Out</button>
        </div>

        <div className="welcome-img">
          <img
            src="https://media.istockphoto.com/id/489803256/photo/below-view-of-young-cheerful-family-in-shopping.jpg?s=612x612&w=0&k=20&c=KcmaBiURs_ChPFCdvNKhmTD5AVEiUxM4MmANitqioz4="
            alt="shopping family"
            className="img-fluid"
          />
        </div>
      </div>

      <div className='Latest-Collections my-5'>
        <p>
          <i>
            Check out our latest arrivals – from summer must-haves to timeless classics.
            Refresh your wardrobe with bold prints, breathable fabrics, and modern fits designed for everyday wear.
            New styles drop weekly, so there’s always something fresh waiting for you.
          </i>
        </p>
      </div>

      <div className="deals-section text-center my-5">
        <div className='maincenterimg'>
          <img
            src="https://cdn.firstcry.com/education/2022/11/13120532/Summer-Clothes-Vocabulary-in-English-for-Kids.jpg"
            alt="clothing deals"
            className="img-fluid"
          />
          <h2 className="mt-3">Top Deals</h2>
          <p><i>Get exciting shopping deals, add to the cart, and enjoy shopping!</i></p>
          <button id="dealsbtn" className="btn btn-dark" onClick={() => navigate('/store')}>Shop Now</button>
        </div>
      </div>
    </div>
  );
}
