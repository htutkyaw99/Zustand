import { Product, useCartStore } from "../store/cartStore";

const CartItem = ({ id, title }: Product) => {
  const remove = useCartStore((state) => state.removeFromCart);

  return (
    <div className="product">
      <p>{title}</p>
      <button onClick={() => remove(id)}>Remove From Cart</button>
    </div>
  );
};

export default CartItem;
