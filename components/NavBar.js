import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";



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

  const cartItemsCount = useSelector((state) => {
    return state.reducer.cartItem;
  })
  console.log(cartItemsCount);

  return (
    <>
      <header className={`${styles.siteHeader} sticky-top py-1`}>
        <nav className="container d-flex flex-column flex-md-row justify-content-between">
          <a className="py-2" href="#" aria-label="Product">
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
          <a className="py-2 d-none d-md-inline-block" href="#">
            Grocery
          </a>
          <a className="py-2 d-none d-md-inline-block" href="#">
            Electronics
          </a>
          <a className="py-2 d-none d-md-inline-block" href="#">
            Home & Lifestyle
          </a>
          <a className="py-2 d-none d-md-inline-block" href="#">
            Fashion
          </a>
          <a className="py-2 d-none d-md-inline-block" href="#">
            Accessories
          </a>
          <a className="py-2 d-none d-md-inline-block" href="#">
            Automative & Motorbike
          </a>
          <a
            onClick={toggleDrawer(true)}
            className="py-2 d-none d-md-inline-block"
          >
            <ShoppingCartIcon /> <span>{cartItemsCount.length}</span>
          </a>
        </nav>
      </header>
      <CartDrawerDynamic toggleDrawer={toggleDrawer} drawerState={drawerState} ></CartDrawerDynamic>
    </>
  );
};

export default NavBar;
