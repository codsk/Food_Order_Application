import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function Orderpizza({ handleCart }) {
  const [log, setLog] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/orderPizza", (err, res) => {
        if (err) console.log(err);
        else console.log(res);
      })
      .then((res) => setLog(res.data));
  }, []);

  return (
    <>
      <section className="container px-4">
        <div className="row ">
          {log.map((item) => (
            <div
              key={item.id}
              className="col-6 bg-light rounded-25px mt-4 pt-4 gx-4"
            >
              <span className="row mx-2">
                <div className="col ">
                  <p>
                    <b>{item.name}</b>
                  </p>
                  {item.type === "veg" ? (
                    <p style={{ color: "green" }}>&#9632;</p>
                  ) : (
                    <p style={{ color: "red" }}>&#9632;</p>
                  )}
                  <p>
                    <b>&#x20b9;{parseFloat(item.price).toFixed(2)}</b>
                  </p>
                </div>
                <div className="col">
                  <p>{item.description}</p>
                  <p>
                    <b>Ingredients: </b>
                    {item.ingredients.join(", ")}
                  </p>
                  <p>
                    <b>Topping: </b>
                    {item.topping.join(", ")}
                  </p>
                </div>
                <div className="col">
                  <img
                    className="mb-4"
                    src={item.image}
                    alt=""
                    width="225px"
                    height="225px"
                  />
                  <button
                    className="btn bg-warning mx-5"
                    onClick={() => handleCart(item)}
                  >
                    Add to cart
                  </button>
                </div>
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Orderpizza;
