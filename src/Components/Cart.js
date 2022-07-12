import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./Cart.css";
import Total from "./Total";
import CartProduct from "./CartProduct";
import { useStateValue } from "../StateProvider";
import jwt_decode from "jwt-decode";

export default function Cart() {
  var isAuth = false;
  var token = localStorage.getItem("tokenStore");
  if (token) {
    isAuth = true;
    var decoded = jwt_decode(token);
    var username = decoded.name;
    console.log(username);
  }
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (cart.length == 0) {
      const timer = setTimeout(() => setShow(true), 32000);
      return () => clearTimeout(timer);
    }
  });
  const [{ cart }, dispatch] = useStateValue();
  const [totalAmount, settotalAmount] = useState(0);
  return (
    <>
      <Navbar />
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                {
                cart.length !== 0 ? 
                <div className="card-header py-3">
                  <h5 className="mb-0">Your Cart - {cart.length} items</h5>
                </div>:<div className="card-header py-3">
                  <h5 className="mb-0">Your Cart is Empty</h5>
                </div>
                 }
                <div className="card-body">
                {
                    cart.map((item) => {
                            {/* settotalAmount(totalAmount+1); */}
                        return(<>
                            <CartProduct 
                                title= { item.title }
                                price={ item.price }
                                image= { item.img }
                            />
                            </>
                        )
                    })
                }
                </div>
              </div>
            </div>
            <div className="col-md-4">
            {
            cart.length !== 0 ? 
                <Total />: <div></div>
            }
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
{
}
