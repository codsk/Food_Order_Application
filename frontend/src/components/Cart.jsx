import React, { useEffect, useState, useCallback } from "react";

function Cart({ cart, setCart ,count}) {
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = useCallback(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  }, [cart]);

  useEffect(() => {
    const total = calculateTotalPrice();
    setTotalPrice(total);
  }, [cart, calculateTotalPrice]);

  const handleIncrement = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const handleDecrement = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  const handleRemove = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  return (
    <>
      <section className="container">
        <div className="row">
          {cart?.map((item) => (
            <div key={item.id} className="col-md-6 mb-4">
              <div className="row bg-light rounded-25px p-3">
                <div className="col-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="img"
                    height="100px"
                    width="125px"
                  />
                </div>
                <div className="col-6">
                  <p className="mb-0">
                    <b>{item.name}</b>
                  </p>
                  <br />
                  <div className="d-flex align-items-center">
                    <button
                      className="btn btn-sm btn-outline-secondary me-1"
                      onClick={() => handleDecrement(item.id)}
                    >
                      -
                    </button>
                    <span className="fw-bold">{item.quantity}</span>
                    <button
                      className="btn btn-sm btn-outline-secondary ms-1"
                      onClick={() => handleIncrement(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="col-3 text-end">
                  <p className="mb-0">
                    <b>&#x20b9;{item.price * item.quantity}</b>
                  </p>
                  <br />
                  <button
                    className="btn btn-sm btn-danger mt-2"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row mt-6">
          <div className="col text-end">
            <p className="fw-bold">Total price of your cart:</p>
            <p className="fw-bold">&#x20b9;{totalPrice}</p>
            {
              count>0 && <button className="btn btn-sm btn-danger mt-2" onClick={()=>alert("order placed")}>Order</button>
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
