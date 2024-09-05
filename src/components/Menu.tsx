import { useEffect, useState } from "react";
import { Product } from "./Product";
import axios from "axios";
import { Product as ProductT } from "../store/cartStore";

export const Menu = () => {
  const [products, setProducts] = useState<ProductT[]>([]);

  useEffect(() => {
    const fetchResult = async () => {
      const res = await axios.get<ProductT[]>(
        "https://fakestoreapi.com/products"
      );
      setProducts(res.data.slice(0, 4));
      console.log(res.data.slice(0, 4));
    };
    fetchResult();
  }, []);

  return (
    <div className="menu">
      {products?.map((el) => (
        <Product key={el.id} {...el} />
      ))}
    </div>
  );
};
