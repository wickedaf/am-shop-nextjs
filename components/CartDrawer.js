import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { useDispatch, useSelector } from "react-redux";
import List from "@material-ui/core/List";
import { removeFromCart } from "../redux/cartSlice";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";

const CartDrawer = ({ toggleDrawer, drawerState, cartItems }) => {
  const dispatch = useDispatch();
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <Drawer anchor="right" open={drawerState} onClose={toggleDrawer(false)}>
      <List>
        {cartItems.map((item, index) => (
          <div key={index} className="px-3">
            <div key={index} className="card border" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.mrp} BDT</p>
              </div>
              <button
                onClick={() => handleRemoveFromCart(item)}
                className="btn btn-dark"
              >
                <RemoveShoppingCartIcon />
              </button>
            </div>
            <hr />
          </div>
        ))}
      </List>
    </Drawer>
  );
};

export default CartDrawer;
