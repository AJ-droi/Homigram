import heroBg from "../../assets/hero.jpg";
import HeroCardSmall from "./HeroCardSmall.jsx";
import HeroCarousel from "./HeroCarousel";
import HeroForm from "./HeroForm";

const Hero = () => {
  const style = {
    backgroundImage: `url(${heroBg})`,
  };
  return (
    <header style={style} className="">
      <div className="spacing-x py-20 bg-[rgba(0,0,0,.8)] flex flex-col lg:flex-row items-center gap-10 min-h-full w-full bg-cover bg-center">
        {/* Left side */}
        <div className="w-full lg:w-3/5 flex flex-col items-center lg:items-start gap-10">
          {/* Carousel */}
          <HeroCarousel />
          {/* Paragraph */}
          <p>You don't have to arrive! Find a place to live on the go!</p>
          <ul className=" flex gap-8 items-center flex-wrap">
            <HeroCardSmall text="Residential" count="30M" />
            <HeroCardSmall text="Commercial" count="350k" />
            <HeroCardSmall text="Land" count="5M" />
          </ul>
        </div>
        {/* Right side: Form */}
        <div className="w-full lg:w-2/5">
          <HeroForm />
        </div>
      </div>
    </header>
  );
};

export default Hero;
