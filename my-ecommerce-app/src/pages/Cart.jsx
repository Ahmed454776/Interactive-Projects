import './Cart.css';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cartItems, dispatch } = useCart();

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-heading">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-table-container">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td><img src={item.image} alt={item.title} className="cart-image" /></td>
                    <td>{item.title}</td>
                    <td>${item.price}</td>
                    <td>1</td>
                    <td>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="remove-btn"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="cart-total">Total: ${totalPrice}</div>
        </>
      )}
    </div>
  );
}

export default Cart;

// This code defines a Cart component that displays the items in the user's cart.