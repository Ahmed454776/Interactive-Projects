import './ProductDetails.css';
import { useParams, Link } from 'react-router-dom';
import products from '../data/products';
import { useCart } from '../context/CartContext';

function ProductDetails() {
  const { id } = useParams();
  const { dispatch } = useCart();

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="not-found">
        <h2 className="not-found-heading">Product Not Found</h2>
        <Link to="/" className="not-found-link">Back to Home</Link>
      </div>
    );
  }

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className="product-details-container">
      <img
        src={product.image}
        alt={product.title}
        className="product-image"
      />
      <div className="product-info">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
        <button onClick={addToCart} className="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
