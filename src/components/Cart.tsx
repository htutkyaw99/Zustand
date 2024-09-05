import { Product as ProductT, useCartStore } from "../store/cartStore";
import CartItem from "./CartItem";

export const Cart = () => {
  const products = useCartStore((state) => state.products);
  const clear = useCartStore((state) => state.clearCart);

  return (
    <section className="menu">
      <p>Cart List</p>
      {products.length > 0 ? (
        products.map((el: ProductT, idx) => (
          <>
            <button onClick={clear}>Clear Cart</button>
            <CartItem key={idx} {...el} />
          </>
        ))
      ) : (
        <p>There is no products</p>
      )}
    </section>
  );
};
