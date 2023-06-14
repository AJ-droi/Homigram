/* eslint-disable react/prop-types */

import { useState } from "react";

function LandSaleCard({ item }) {
  const [showBottom, setShowBottom] = useState(false);
  const style = {
    backgroundImage: `url(${item.image})`,
  };
  return (
    <li
      onMouseEnter={() => setShowBottom(true)}
      onMouseLeave={() => setShowBottom(false)}
      style={style}
      className={`relative bg-cover bg-no-repeat bg-center rounded-lg w-[355px] h-[265px] overflow-hidden`}
    >
      {/* Top Part */}
      <div className="text-[10px] pt-5 font-semibold">
        <div className="rounded bg-orange-600 w-fit px-4 py-1">
          {item.growth}%
        </div>
        {item.openLand && (
          <div className="rounded bg-orange-400 mt-2 w-fit px-4 py-1 uppercase">
            open land
          </div>
        )}
      </div>

      {/* Bottom */}
      <BottomPart item={item} show={showBottom} />
    </li>
  );
}

export default LandSaleCard;

function BottomPart({ item, show }) {
  return (
    <div
      className={`absolute ${
        show ? "bottom-0" : "-bottom-[70px]"
      } left-0 right-0 transition-all duration-1000 ease-out`}
    >
      <div className="p-4 flex items-center bg-[rgba(0,0,0,.2)] justify-between">
        <div>
          <h3 className="font-bold capitalize text-lg mb-1">{item.title}</h3>
          <span className="font-semibold">${item.pricePerUnit} / unit</span>
        </div>
        <button className="blueGradient px-8 font-bold py-2 rounded">
          Buy
        </button>
      </div>
      <div className="bg-[rgba(0,0,0,.8)] flex items-center h-20">
        <div className="bg-[#636363] flex flex-col items-center justify-center h-full w-20">
          <p className="text-sm">Plot</p>
          <p>{item.plots}</p>
        </div>
        <div className="bg-[#565656] flex flex-col items-center justify-center h-full w-20">
          <p className="text-sm">Area</p>
          <p>
            {item.area}m<sup>2</sup>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
