import classes from "./CartButton.module.css";

import { useDispatch } from "react-redux";
import { uiSliceActions } from "../../store/reduxStore";
import { useSelector } from "react-redux";
const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cartSlice.totalQuantity);
  console.log(totalQuantity);
  const onMyCartClicked = () => {
    dispatch(uiSliceActions.toogleCartIsVisible());
  };

  return (
    <button className={classes.button} onClick={onMyCartClicked}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
