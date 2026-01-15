const Hero = () => {
  return (
    <section className="hero">
        <div className="hero__info">
          <div>
            <h1 className="hero__title">
              Luxury homeware for people who love timeless design quality
            </h1>
            <p className="hero__text">
              Shop the new Spring 2022 collection today
            </p>
          </div>
          <button className="hero__button">View collection</button>
        </div>
        <div className="hero__img">
            <img src="/image/main/home/hero.png" alt="brown furniture" />
        </div>
    </section>
  );
};

export default Hero;
