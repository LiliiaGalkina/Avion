import Hero from "./Hero";
import Brand from "./Brand";
import HomePageProducts from "./HomePageProducts";
import Started from "./Started";
import JoinUs from "../JoinUs";

const HomePage = () => {
    return (
        <main className="main">
			<Hero />
			<Brand />
			<HomePageProducts />
			<Started />
			<JoinUs/>
        </main>
    )
}

export default HomePage;