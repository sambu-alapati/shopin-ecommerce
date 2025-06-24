import React from 'react';

export default function Contact() {
  return (
    <div className="container my-5">
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold">Contact Us</h1>
        <p className="text-muted">We’d love to hear from you! Reach out with any questions or feedback.</p>
      </div>

      <div className="row g-5">
        {/* Contact Form */}
        <div className="col-md-7">
          <h3 className="mb-4">Send a Message</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="name" placeholder="John Doe" />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" className="form-control" id="email" placeholder="example@email.com" />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Type your message here..."></textarea>
            </div>

            <button type="submit" className="btn btn-primary px-4">Send</button>
          </form>
        </div>

        {/* Store Info */}
        <div className="col-md-5">
          <h3 className="mb-4">Our Store</h3>
          <ul className="list-unstyled">
            <li className="mb-3">
              <i className="bi bi-geo-alt-fill me-2"></i>
              <strong>Address:</strong><br />
              Shopin Clothing Pvt. Ltd.<br />
              123 Fashion Street,<br />
              Mumbai, India 400001
            </li>
            <li className="mb-3">
              <i className="bi bi-envelope-fill me-2"></i>
              <strong>Email:</strong> support@shopin.com
            </li>
            <li className="mb-3">
              <i className="bi bi-telephone-fill me-2"></i>
              <strong>Phone:</strong> +91 98765 43210
            </li>
            <li>
              <i className="bi bi-clock-fill me-2"></i>
              <strong>Hours:</strong><br />
              Mon – Sat: 9 AM – 6 PM<br />
              Sunday: Closed
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
