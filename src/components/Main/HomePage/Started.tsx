const Started = () => {
	return (
    <section className="started">
      <div className="container">
        <div className="started__items">
          <div className="started__item started-info">
            <div className="started-info__body">
              <h2 className="started-info__title">
                It started with a small idea
              </h2>
              <p className="started-info__text">
                A global brand with local beginnings, our story begain in a
                small studio in South London in early 2014
              </p>
            </div>
            <button className="started-info__button">View collection</button>
          </div>
          <div className="started__item">
            <img
              src="/image/main/home/started.png"
              alt="yellow chair and white furniture in a bright room"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Started;