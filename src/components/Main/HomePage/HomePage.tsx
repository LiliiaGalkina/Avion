import Hero from "./Hero";
import Brand from "./Brand";
import Started from "./Started";
import JoinUs from "../JoinUs";
import Products from "../Products";

const HomePage = () => {
    return (
      <main className="main">
        <Hero />
        <Brand />
        <Products count={4} />
        <Started />
        <JoinUs />
      </main>
    );
}

export default HomePage;