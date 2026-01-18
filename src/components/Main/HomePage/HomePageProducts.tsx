import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import { fetchProducts } from "../../../store/productSlice";

const HomePageProducts = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = useAppSelector((state) => state.products.products);

	return (
    <div className="container products-container">
      <div className="products">
        {products.slice(0, 4).map((product) => (
          <a href="" className="products__card card-products" key={product.id}>
            <img src={product.image} className="card-products__img" alt={product.alt} />
            <h3 className="card-products__title">{product.name}</h3>
            <p className="card-products__price">${product.price}</p>
          </a>
        ))}
      </div>
      <button className="products-container__button">View collection</button>
    </div>
  );
};

export default HomePageProducts;
