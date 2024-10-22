import { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/Storecontext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, catalogue, getTotalCart, url } =
    useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {/*ToDo Check on this line of code*/}
        {catalogue.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item">
                  <img src={url+"/images/"+item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>Ksh:{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>Ksh:{item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    X
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Ksh: {getTotalCart()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Shipping</p>
              <p>Ksh: {getTotalCart()===0?0:50}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>Ksh: {getTotalCart()===0?0:getTotalCart() + 50}</b>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>
            Proceed To Checkout
          </button>
        </div>
        <div className="promo-code">
          <div>
            <p>Enter Your Promo-Code Here</p>
            <div className="promocode-input">
              <input type="text" placeholder="VM123" />
              <button>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
