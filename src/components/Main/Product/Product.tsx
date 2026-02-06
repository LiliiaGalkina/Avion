import { useMatch } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import Brand from "../HomePage/Brand";
import JoinUs from "../JoinUs";
import { addToCart } from "../../../store/productSlice";

const Product = () => {
  const match = useMatch("/catalog/:id");
  const productId = match?.params.id;
  const products = useAppSelector((state) => state.products.filtered);
  const [product] = products.filter((elem) => elem.id === productId);

  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <main>
      <div className="product-page">
        <div className="container">
          <section className="product-section">
            <div className="product-section__items">
              <div className="product-section__image">
                <img src={product.image} alt={product.alt} />
              </div>
              <div className="product-section__content">
                <h2 className="product-section__title">{product.name}</h2>
                <p className="product-section__price">${product.price}</p>
                <div className="product-section__description">
                  <span>Product description</span>
                  <span>{product.description}</span>
                </div>
                <p>Dimensions</p>
                <div className="product-section__sizes">
                  <p>
                    <span>Height</span>
                    <span>{product.height}</span>
                  </p>
                  <p>
                    <span>Width</span>
                    <span>{product.width}</span>
                  </p>
                  <p style={{display: product.depth > 0 ? "flex" : "none"}}>
                    <span>Depth</span>
                    <span>{product.depth}</span>
                  </p>
                </div>
                <button className="product-section__button" onClick={handleAddToCart}>Add to cart</button>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Brand/>
      <JoinUs/>
    </main>
  );
};

export default Product;
