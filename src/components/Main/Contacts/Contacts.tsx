import JoinUs from "../JoinUs";
import Brand from "../HomePage/Brand";
import Started from "../HomePage/Started";

const Contacts = () => {
  return (
    <main>
      <div className="container">
        <section className="contacts">
          <h2 className="contacts__title">Our Contacts</h2>
          <div className="contacts__items">
            <address>
              <span>Russian Federation</span>
              <span>Moscow</span>
              <span>Kropotkin strret, 25</span>
            </address>
            <div className="contact">
              <p className="phone">
                <span> &#128222;;</span>
                <span>8(495) 999-99-99</span>
              </p>
              <p className="phone">
                <span> &#128222;</span>
                <span>+7 999-999-99-99</span>
              </p>
              <p className="email">
                <span> &#128231;</span>
                <span>contact@avion.ru</span>
              </p>
            </div>
          </div>
        </section>
      </div>
      <Started/>
      <Brand/>
      <JoinUs/>
    </main>
  );
};

export default Contacts;
