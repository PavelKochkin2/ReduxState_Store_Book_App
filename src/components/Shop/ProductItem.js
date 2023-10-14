import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartSliceActions } from "../../store/reduxStore";
import { useDispatch } from "react-redux";

const ProductItem = (props) => {
  const { id, title, price, description } = props;
  const dispatch = useDispatch();
  const onAddToCartClicked = () => {
    debugger;
    dispatch(
      cartSliceActions.addItemToCart({
        id: id,
        price: price,
        name: title,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={onAddToCartClicked}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
