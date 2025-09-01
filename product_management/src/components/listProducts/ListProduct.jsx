import ProductCard from "../Product/Product"
import "./ListProduct.css"
const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((item) => (
        <ProductCard  product={item} />
      ))}
    </div>
  );
};


export default ProductList;