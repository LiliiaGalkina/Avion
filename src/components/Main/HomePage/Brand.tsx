const Brand = () => {
  return (
    <section className="brand">
      <div className="container">
        <h2 className="brand__title">What makes our brand different</h2>
        <div className="brand__items">
          <div className="brand__item card-brand">
            <img
              src="/image/main/home/car.svg"
              className="card-brand__img"
              alt="car icon"
            />
            <h3 className="card-brand__title">Next day as standard</h3>
            <p className="card-brand__text">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>
          <div className="brand__item card-brand">
            <img
              src="/image/main/home/checkmark.svg"
              className="card-brand__img"
              alt="checkmark icon"
            />
            <h3 className="card-brand__title">Made by true artisans</h3>
            <p className="card-brand__text">
              Handmade crafted goods made with real passion and craftmanship
            </p>
          </div>
          <div className="brand__item card-brand">
            <img
              src="/image/main/home/purchase.svg"
              className="card-brand__img"
              alt="purchase icon"
            />
            <h3 className="card-brand__title">Unbeatable prices</h3>
            <p className="card-brand__text">
              For our materials and quality you won’t find better prices
              anywhere
            </p>
          </div>
          <div className="brand__item card-brand">
            <img
              src="/image/main/home/sprout.svg"
              className="card-brand__img"
              alt="sprout icon"
            />
            <h3 className="card-brand__title">Recycled packaging</h3>
            <p className="card-brand__text">
              We use 100% recycled to ensure our footprint is more manageable
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
