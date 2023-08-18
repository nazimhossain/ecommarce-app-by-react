import React from 'react';
import './Footer.css'; // Import your custom CSS for the footer

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>About Us</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis nisl eget ipsum viverra, ut suscipit felis ultrices.
            </p>
          </div>
          <div className="col-md-4">
            <h4>Contact Us</h4>
            <p>Email: info@example.com</p>
            <p>Phone: +1234567890</p>
          </div>
          <div className="col-md-4">
            <h4>Follow Us</h4>
            <ul className="list-unstyled">
              {/* <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li> */}
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container text-center">
          <p>&copy; 2023 E-Commerce Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
