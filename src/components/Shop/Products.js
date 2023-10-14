import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const PRODUCTS_STUB = [
  {
    itemId: "p1",
    price: "13",
    name: "Book about goblins",
    description: "This is a book about fucking goblins",
  },
  {
    itemId: "p2",
    price: "16",
    name: "Book about sdadsadsadsadsasadsad",
    description: "whatttt",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {PRODUCTS_STUB.map((product) => {
          return (
            <ProductItem
              id={product.itemId}
              key={product.id}
              title={product.name}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
