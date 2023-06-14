/* eslint-disable react/prop-types */

function HeroSlideCard({ logo, text, heading }) {
  return (
    <div className="text-color-white w-[80%]">
      <img src={logo} alt="logo" className="h-[25vh]" />
      <div className="pl-[2%]">
        <p>{text}</p>
        <h3 className="text-[2.5rem] font-bold">{heading}</h3>
      </div>
    </div>
  );
}

export default HeroSlideCard;
