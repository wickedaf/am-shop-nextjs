import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { useSelector } from "react-redux";
import List from "@material-ui/core/List";



const CartDrawer = ({ toggleDrawer, drawerState, cartItems }) => {
  const cartItemsCount = useSelector((state) => {
    return [state.reducer.cartItem];
  });

  console.log(cartItems);

  return (
    <Drawer anchor="right" open={drawerState} onClose={toggleDrawer(false)}>
      <List>
      {cartItems.map((item, index) => 
        <div className="px-3">
          <div key={index} classNam="card border" style={{ width: "18rem" }}>
            <div classNam="card-body">
              <h5 classNam="card-title">{item.name}</h5>
              <p classNam="card-text">
                {item.mrp} BDT
              </p>
            </div>
          </div>
          <hr />
        </div>
      )}
      </List>
    </Drawer>
  );
};

export default CartDrawer;
