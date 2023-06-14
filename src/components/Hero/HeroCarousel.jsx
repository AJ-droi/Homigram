import Carousel from "react-grid-carousel";
import HeroSlideCard from "./HeroSlideCard";
import { heroData } from "../../data/hero";

function HeroCarousel() {
  return (
    <Carousel cols={1} rows={1} gap={10} loop>
      {heroData.map((item, index) => {
        return (
          <Carousel.Item key={index}>
            <HeroSlideCard
              logo={item.logo}
              text={item.text}
              heading={item.heading}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default HeroCarousel;
