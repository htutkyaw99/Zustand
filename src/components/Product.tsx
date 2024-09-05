import { Product as ProductT, useCartStore } from "../store/cartStore";

export const Product = ({ id, title, price }: ProductT) => {
  const addProduct = useCartStore((state) => state.addToCart);

  return (
    <div className="product">
      <p>{title}</p>
      <button onClick={() => addProduct({ id, title, price })}>
        Add to cart
      </button>
    </div>
  );
};
