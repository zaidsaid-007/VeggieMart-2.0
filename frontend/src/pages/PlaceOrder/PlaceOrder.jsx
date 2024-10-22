import "./PlaceOrder.css";
import { useContext } from "react";
import { StoreContext } from "../../context/Storecontext";

const PlaceOrder = () => {
  const { getTotalCart } = useContext(StoreContext);

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Shipping Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>

        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="County" />

        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Precise Location" />
        </div>

        <div className="multi-fields">
          <input type="text" placeholder="Estate" />
          <input type="text" placeholder="House Number" />
        </div>
        <input type="text" placeholder="Phone Number" />
      </div>

      <div className="place-order-right">
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
              <p>Ksh: {getTotalCart() === 0 ? 0 : 50}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>Ksh: {getTotalCart() === 0 ? 0 : getTotalCart() + 50}</b>
            </div>
          </div>
          <button>Proceed To Payment</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
