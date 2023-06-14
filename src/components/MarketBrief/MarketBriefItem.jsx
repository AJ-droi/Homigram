/* eslint-disable react/prop-types */

function MarketBriefItem({ item }) {
  return (
    <li className="flex flex-col items-center text-sm shadow-2xl p-4 rounded-lg ">
      {/* Heading */}
      <h3 className="text-center uppercase text-xl font-semibold mb-4">
        {item?.name}
      </h3>
      {/* Values */}
      <div className="flex gap-4">
        {/* Left Side: Min Rent */}
        <div className="">
          <div className="flex items-center gap-2">
            <span>Min. Rent</span>
            <button className="px-4 py-1 font-semibold rounded bg-orange-400">
              + {item?.minRent.percentIncrease} %
            </button>
          </div>
          <p className="text-lg font-semibold">${item?.minRent.value}</p>
        </div>
        {/* Right Side Place Value */}
        <div className="">
          <div className="flex items-center gap-2">
            <span>Place Value</span>
            <button className="px-4 py-1 font-semibold rounded bg-orange-500">
              + {item?.placeValue.percentIncrease} %
            </button>
          </div>
          <p className="text-lg font-semibold">${item?.placeValue.value}</p>
        </div>
      </div>
    </li>
  );
}

export default MarketBriefItem;
