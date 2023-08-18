import React from 'react';

function Cart() {
  return (
    <div className="container mt-4">
      <h2 className="mb-3">Your Cart</h2>
      <div className="row">
        <div className="col-lg-8">
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Product A
              <span className="badge badge-primary badge-pill">$29.99</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Product B
              <span className="badge badge-primary badge-pill">$49.99</span>
            </li>
            {/* Add more items... */}
          </ul>
        </div>
        <div className="col-lg-4">
          <div className="card p-3">
            <h4 className="mb-3">Total: $79.98</h4>
            <button className="btn btn-success btn-block">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
