import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'Product A', price: 29.99, description: 'Description for Product A' },
  { id: 2, name: 'Product B', price: 49.99, description: 'Description for Product B' },
  // Add more products...
];

function ProductDetails() {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-6">
          <img src="product-image-url.jpg" alt={product.name} className="img-fluid" />
        </div>
        <div className="col-lg-6">
          <h2>{product.name}</h2>
          <p className="text-muted">${product.price.toFixed(2)}</p>
          <p>{product.description}</p>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
