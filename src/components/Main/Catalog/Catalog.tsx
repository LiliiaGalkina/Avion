import { useState } from "react";
import Products from "../Products";
import { useAppDispatch } from "../../../store/hook";
import {
  sortProductsPrice,
  sortProductsCategory,
  sortProductsName,
  filterProducts,
  setSelectedCategory,
  setSelectedPrice,
} from "../../../store/productSlice";
import { prices } from "../../../store/types";

const Catalog = () => {
  const [sortProducts, setSortProducts] = useState("");
  const [filterProductsCategory, setFilterProductcCategory] = useState("");
  const [filterProductsPrice, setFilterProductsPrice] = useState("");

  const dispatch = useAppDispatch();

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const currentValue = event.target.value;
    setSortProducts(currentValue);
    if (currentValue === "category") {
      dispatch(sortProductsCategory());
    } else if (currentValue === "name") {
      dispatch(sortProductsName());
    } else if (currentValue === "price") {
      dispatch(sortProductsPrice());
    }
  };

  const handleFilterCategory = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const filterValue = event.target.value;
    setFilterProductcCategory(filterValue);
    dispatch(setSelectedCategory(filterValue));
    dispatch(filterProducts());
  };

  const handleFilterPrice = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const filterValue = event.target.value;
    setFilterProductsPrice(filterValue);
    dispatch(setSelectedPrice(filterValue));
    dispatch(filterProducts());
  };

  return (
    <main className="catalog">
      <h2 className="catalog__title">All products</h2>
      <div className="container">
        <div className="catalog__filters filters">
          <div className="filters__filter-items">
            <select
              name="category"
              id="category"
              className="filters__category"
              value={filterProductsCategory}
              onChange={handleFilterCategory}
            >
              <option value="">Category</option>
              <option value="Chairs">Chairs</option>
              <option value="Ceramics">Ceramics</option>
              <option value="Light fittings">Light fittings</option>
            </select>
            <select
              name="price"
              id="price"
              className="filters__price"
              value={filterProductsPrice}
              onChange={handleFilterPrice}
            >
              <option value="">Price</option>
              {prices.map((price, index) => (
                <option
                  key={index}
                  value={price.length > 1 ? price[1] : price[0]}
                  data-min={price[0]}
                >
                  {price.length > 1
                    ? price[0] + " - " + price[1]
                    : price[0] + " +"}
                </option>
              ))}
            </select>
          </div>
          <div className="filters__sort-block">
            <label htmlFor="sort"></label>
            <select
              name="sort"
              id="sort"
              className="filters__sort"
              value={sortProducts}
              onChange={handleSortChange}
            >
              <option value="">Sort By</option>
              <option value="category">Category</option>
              <option value="name">Name</option>
              <option value="price">Price</option>
            </select>
          </div>
        </div>
        <Products count={12} />
      </div>
    </main>
  );
};
export default Catalog;
