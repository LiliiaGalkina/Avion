import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../store/productSlice";

const Cart = () => {
    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState(0);


   const cartItems = useAppSelector((state) => state.products.cart);
   const dispatch = useAppDispatch();

   const handleRemoveProduct = (item:any) => {
    dispatch(removeFromCart(item));
   }

 
     useEffect(() => {
        let sum = 0;
        cartItems.forEach((item) => sum += (item.price * quantity));
        setTotal(sum);
        localStorage.setItem("cart", JSON.stringify(cartItems));
     },[cartItems,quantity]);

  return (
    <main>
      <section className="cart">
        <div className="container">
          <h2 className="cart__title">Your shopping cart</h2>
          <div className="cart__columns-title">
            <h4 className="cart__column-title">Product</h4>
            <h4 className="cart__column-title">Quantity</h4>
            <h4 className="cart__column-title">Total</h4>
          </div>
          <div className="cart__items">
            {cartItems.map((cartItem) => (
              <div key={cartItem.id} className="cart__item cart-row">
                <div className="cart-row">
                  <div className="cart-row__body">
                    <div className="cart-row__img">
                      <img src={cartItem.image} alt={cartItem.alt} />
                    </div>
                    <div className="cart-row__content">
                      <h2 className="cart-row__title">{cartItem.name}</h2>
                      <p className="cart-row__price">${cartItem.price}</p>
                      <button className="cart-row__remove" onClick={() =>handleRemoveProduct(cartItem)}>
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="cart-row__quantity">
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(+e.target.value)}
                      min={1}
                    />
                  </div>
                  <div className="cart-row__sum">
                    ${quantity * cartItem.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart__total">
            <span>Subtotal</span>
            <span>${total}</span>
          </div>
          <p className="cart__text">Taxes and shipping are calculated at checkout</p>
          <Link to={"/catalog"} className="cart__button">Go to Catalog</Link>
        </div>
      </section>
    </main>
  );
};

export default Cart;
