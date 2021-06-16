import React from "react";
import Drawer from '@material-ui/core/Drawer';

const CartDrawer = ({ toggleDrawer, drawerState }) => {
  return (
    <Drawer
      anchor='right'
      open={drawerState}
      onClose={toggleDrawer(false)}
    >
      <div class="card" style={{width: "18rem"}}>
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </Drawer>
  );
};

export default CartDrawer;
