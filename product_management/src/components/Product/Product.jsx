import "./Product.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.images[0]} alt={product.brand} className="product-image" />

      <div className="product-info">
        <h3 className="product-title">{product.brand==null?product.title:product.brand}</h3>
        <p className="product-price">₹{product.price}</p>
      </div>

      <div className="product-actions">
        <button className="btn details-btn">Product Details</button>
        <button className="btn add-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
