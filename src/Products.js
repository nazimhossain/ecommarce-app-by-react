import React from 'react';

const products = [
  { id: 1, name: 'Product A', price: 29.99 },
  { id: 2, name: 'Product B', price: 49.99 },
  // Add more products...
];

function Products() {
  return (
    <div className="container mt-4">
      <h2 className="mb-3">Our Products</h2>
      <div className="row">
        {products.map(product => (
          <div className="col-lg-4 col-md-6 mb-4" key={product.id}>
            <div className="card">
              <img src="product-image-url.jpg" alt={product.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price.toFixed(2)}</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
