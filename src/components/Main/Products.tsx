import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { fetchProducts } from "../../store/productSlice";
import { Link } from "react-router-dom";

type ProductsProps = {
  count: number;
};

const Products: React.FC<ProductsProps> = ({ count }) => {
  const [countShowProducts, setCountShowProducts] = useState(count);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = useAppSelector((state) => state.products.products);

  const handleLoadMore = () => {
    if (countShowProducts > 4 && count < products.length) {
      setCountShowProducts(countShowProducts + 4);
    }
  };

  return (
    <div className="container products-container">
      <div className="products">
        {products.slice(0, countShowProducts).map((product) => (
          <a href="#" className="products__card card-products" key={product.id}>
            <img
              src={product.image}
              className="card-products__img"
              alt={product.alt}
            />
            <h3 className="card-products__title">{product.name}</h3>
            <p className="card-products__price">${product.price}</p>
          </a>
        ))}
      </div>
      {count == 4 ? (
        <Link to={"/catalog"} className="products-container__button">
          View collection
        </Link>
      ) : (
        <button
          className="products-container__button"
          style={{
            display: countShowProducts < products.length ? "flex" : "none",
          }}
          onClick={handleLoadMore}
        >
          View more
        </button>
      )}
    </div>
  );
};

export default Products;
