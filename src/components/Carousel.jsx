import React from 'react';

export default function Carousel() {
  return (
    <div>
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000" // auto-slide every 3 seconds
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://static.toiimg.com/thumb/msid-109341702,width-1280,height-720,imgsize-1355245,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn.mos.cms.futurecdn.net/v2/t:0,l:0,cw:3000,ch:1687,q:80,w:3000/z37mwDVckwJURH4Ho5KRYW.jpeg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://sepiastories.in/wp-content/uploads/2024/05/stores-for-clothing-banner-9.webp"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
