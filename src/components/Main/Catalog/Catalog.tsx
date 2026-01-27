import { useState } from "react";
import Products from "../Products";
import { useAppDispatch } from "../../../store/hook";
import { sortProductsPrice, sortProductsCategory, sortProductsName } from "../../../store/productSlice";

const Catalog = () => {
    const [sortProducts, setSortProducts] = useState("");
      const dispatch = useAppDispatch();

     const handleSortChange = (
       event: React.ChangeEvent<HTMLSelectElement>,
     ) => {
      const currentValue = event.target.value;
      setSortProducts(currentValue);
      if(currentValue === "category") {
        dispatch(sortProductsCategory());
      } else if(currentValue === "name") {
        dispatch(sortProductsName());
      } else if(currentValue === "price") {
        dispatch(sortProductsPrice());
      }
     };

  return (
    <main className="catalog">
      <h2 className="catalog__title">All products</h2>
      <div className="container">
        <div className="catalog__filters filters">
          <div className="filters__filter-items">
            <select name="category" id="category" className="filters__category">
              <option value="">Category</option>
              <option value="Chairs">Chairs</option>
              <option value="Ceramics">Ceramics</option>
              <option value="Light fittings">Light fittings</option>
              <option value="Sofas">Sofas</option>
            </select>
            <select name="price" id="price" className="filters__price">
              <option value="">Price</option>
              <option value="100">0 - 100</option>
              <option value="200">101 - 200</option>
              <option value="250">250 +</option>
            </select>
          </div>
          <div className="filters__sort-block">
            <label htmlFor="sort"></label>
            <select name="sort" id="sort" className="filters__sort" value={sortProducts} onChange={handleSortChange} >
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
