import Container from "../components/common/Container";
import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts";
import OfferBanner from "../components/home/OfferBanner";
import LatestProducts from "../components/home/LatestProducts";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Newsletter from "../components/home/Newsletter";

function Home() {
  return (
    <Container>
      <Hero />

      <Categories />

      <FeaturedProducts />

      <OfferBanner />

      <LatestProducts />

      <WhyChooseUs />

      <Newsletter />
    </Container>
  );
}

export default Home;