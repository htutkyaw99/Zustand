import { create } from "zustand";

export type Product = {
  id: string;
  title: string;
  price: number;
};

type CartState = {
  products: Product[];
  total: number;
};

type CartAction = {
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
};

type CartSlice = CartState & CartAction;

export const useCartStore = create<CartSlice>((set) => ({
  products: [],
  total: 0,

  addToCart: (product: Product) =>
    set((state) => ({
      products: [...state.products, product],
      total: state.total + product.price,
    })),

  removeFromCart: (productId: string) =>
    set((state) => {
      const productToRemove = state.products.find(
        (product) => product.id === productId
      );
      return {
        products: state.products.filter((product) => product.id !== productId),
        total: productToRemove
          ? state.total - productToRemove.price
          : state.total,
      };
    }),

  clearCart: () =>
    set({
      products: [],
      total: 0,
    }),
}));
