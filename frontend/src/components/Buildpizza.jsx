import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
function Buildpizza() {
  const [log, setLog] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/customPizza")
      .then((res) =>setLog(res.data));
      console.log('hai')
  });

  const totalPrice = (checked, cost) => {
    if (checked) setTotal((prevCost) => prevCost + cost);
    else setTotal((prevCost) => prevCost - cost);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <p className="text-center">
            Pizzeria now gives you options to build your own pizza. Customize
            your pizza by choosing ingredients from the list given below.
          </p>
        </div>

        <table className="table table-striped table-bordered text-center w-50 mx-auto">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name & Price</th>
              <th>Select</th>
            </tr>
          </thead>
          <tbody>
            {log.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.image} alt={item.tname} width="50px" />
                </td>
                <td>
                  <pre>
                    {item.tname} &#x20b9;{item.price}
                  </pre>
                </td>
                <td className="text-warning">
                  <pre>
                    <input
                      type="checkbox"
                      onClick={(e) => totalPrice(e.target.checked, item.price)}
                    />{" "}
                    Add
                  </pre>
                </td>
              </tr>
            ))}
            <tr>
              <td>
                <pre>Total Price: {total}</pre>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="text-center">
          <button className="btn bg-dark text-danger">Build ur Pizza</button>
        </div>
      </div>
    </>
  );
}

export default Buildpizza;

