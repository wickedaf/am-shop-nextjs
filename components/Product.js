import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const Product = ({product}) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
        dispatch(addToCart(product))
}

const cartItems = useSelector((state) => {
  return state.cartItem;
})


  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <img
        src={product.productImages[0].link}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description?.substr(0, 100) || `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}</p>
        <a onClick={ () =>handleAddToCart(product)} className="btn btn-primary">
          Add to cart
        </a>
      </div>
    </div>
  );
};

export default Product;
