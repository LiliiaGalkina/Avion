const JoinUs = () => {
	return (
    <section className="join-us">
      <div className="join-us__info info-join-us">
        <h2 className="info-join-us__title">
          Join the club and get the benefits
        </h2>
        <p className="info-join-us__text">
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop up stores and more
        </p>
        <ul className="info-join-us__list">
          <li className="info-join-us__list-item"><img src="/image/main/home/checkmark.svg"/><span>Exclusive offers</span></li>
          <li className="info-join-us__list-item"><img src="/image/main/home/checkmark.svg"/><span>Free events</span></li>
          <li className="info-join-us__list-item"><img src="/image/main/home/checkmark.svg"/><span>Large discounts</span></li>
        </ul>
        <form action="#" className="info-join-us__form form-join-us">
          <input
            type="email"
            className="form-join-us__input"
            required
            placeholder="your@email.com"
          />
          <button type="submit" className="form-join-us__button">
            Sign up
          </button>
        </form>
      </div>
    </section>
  );
}

export default JoinUs;