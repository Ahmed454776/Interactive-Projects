import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../pages/Home.css';

function ProductCard({ product }) {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price}</p>
      <div className="product-actions">
        <Link to={`/product/${product.id}`} className="view-details">View Details</Link>
        <button onClick={addToCart} className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
