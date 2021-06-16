import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import Swal from 'sweetalert2'



const CartDrawerDynamic = dynamic(() => import("./CartDrawer.js"));

const NavBar = () => {
  const [drawerState, setDrawerState] = useState(false);

  const toggleDrawer = (state) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerState(state);
  };

  const cartItems = useSelector((state) => {
    return state.reducer.cartItem;
  })


  return (
    <>
      <header className={`${styles.siteHeader} sticky-top`}>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
  <a className="py-2 mx-4" href="#" aria-label="Product">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="d-block mx-auto"
              role="img"
              viewBox="0 0 24 24"
            >
              <title>Product</title>
              <circle cx="12" cy="12" r="10" />
              <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" />
            </svg>
          </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <a className="py-2 mx-4 d-none d-md-inline-block" href="#">
            Grocery
          </a>
        </li>
        <li class="nav-item">
        <a className="py-2 mx-4 d-none d-md-inline-block" href="#">
            Electronics
          </a>
        </li>
        
        <li class="nav-item">
        <a className="py-2 mx-4 d-none d-md-inline-block" href="#">
            Home & Lifestyle
          </a>
        </li>
        <li class="nav-item">
        <a className="py-2 mx-4 d-none d-md-inline-block" href="#">
            Fashion
          </a>
        </li>
        <li class="nav-item">
        <a className="py-2 mx-4 d-none d-md-inline-block" href="#">
            Accessories
          </a>
        </li>
        <li class="nav-item">
        <a className="py-2 mx-4 d-none d-md-inline-block" href="#">
            Automative & Motorbike
          </a>
        </li>
        <li class="nav-item">
        <a
            onClick={cartItems.length === 0 ? () => <>{Swal.fire('Oops', 'There is not item in your cart', 'error')}</> :toggleDrawer(true)}
            className="py-2 mx-4 d-none d-md-inline-block"
          >
            <ShoppingCartIcon /> <span>{cartItems.length}</span>
          </a>
        </li>
      </ul>

    </div>
  </div>
</nav>
      </header>
      <CartDrawerDynamic toggleDrawer={toggleDrawer} drawerState={drawerState} cartItems={cartItems} ></CartDrawerDynamic>
    </>
  );
};

export default NavBar;
