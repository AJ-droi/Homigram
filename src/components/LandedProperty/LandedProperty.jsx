/* eslint-disable react/prop-types */
import Carousel from "react-grid-carousel";
import LandedPropertyCard from "./LandedPropertyCard";
import { landedPropertyData } from "../../data/landedPropertyData";

function LandedProperty() {
  return (
    <section className="px-20 py-10 text-center bg-color-primary-dark-2">
      <h2 className="font-semibold text-2xl mb-4">Explore Landed Properties</h2>
      <p className="mb-16">
        Buy plots of land at cheaper rates. It might be all you need in your
        portfolio
      </p>

      <Gallery data={landedPropertyData} />
    </section>
  );
}

export default LandedProperty;

function Gallery({ data }) {
  return (
    <Carousel cols={3} rows={1} autoplay={3000} showDots hideArrow gap={30}>
      {data.map((el) => (
        <Carousel.Item key={el.id}>
          <LandedPropertyCard item={el} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
