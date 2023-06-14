/* eslint-disable react/prop-types */
import { MdShuffle } from "react-icons/md";
import { AiOutlineCamera, AiOutlineHeart } from "react-icons/ai";

function PropertyCard({ item }) {
  return (
    <li className="w-full sm:w-[350px] bg-color-primary-dark overflow-hidden rounded-lg">
      {/* Top Part */}
      <TopPart item={item} />
      {/* Bottom */}
      <BottomPart item={item} />
    </li>
  );
}

export default PropertyCard;

function TopPart({ item }) {
  return (
    <div className="relative flex flex-col justify-between w-full h-[200px]">
      <img
        className="w-full inset-0 object-center object-cover absolute h-full"
        src={item.image}
        alt={item.title}
      />
      <div className="flex relative z-10 p-4 items-center justify-between ">
        <button className="px-3 py-1 text-[10px] bg-color-accent-orange rounded uppercase">
          Vacant
        </button>
        <div className="flex rounded items-center text-sm gap-2 bg-color-primary-dark-2 py-1 px-2">
          <AiOutlineCamera />
          <span className="">{item.photoCount}</span>
        </div>
      </div>
      <div className="flex flex-col p-4 relative z-10 gap-3 text-xl justify-end items-end">
        <span className="p-2 bg-color-primary-dark-2 rounded w-fit">
          <AiOutlineHeart />
        </span>
        <span className="p-2 bg-color-primary-dark-2 rounded w-fit">
          <MdShuffle />
        </span>
      </div>
    </div>
  );
}

function BottomPart({ item }) {
  return (
    <div className="p-6 flex flex-col gap-3">
      {/* Property Location */}
      <p className="uppercase text-lg">{item.country}</p>
      {/* Title of property */}
      <h3 className="font-semibold text-lg">{item.title}</h3>
      {/* Price */}
      <span className="text-blue-400 font-semibold text-lg">
        ${item.price}.00
      </span>
      {/* Description */}
      <p className="text-gray-300 text-sm">{item.description}</p>

      {/* Rent features */}
      <ul className="flex items-center text-[12px] font-semibold">
        <li className="border-r border-gray-600 pr-2">
          Rent: {item.rentCount}
        </li>
        <li className="border-r border-gray-600 px-2">Light: {item.light}</li>
        <li className=" pl-2">Water: {item.water}</li>
      </ul>
      {/* Interests */}
      <div className="flex items-center justify-between">
        <span className="text-gray-400">
          Interested: {item.interestedBuyers}
        </span>
        <button className="rounded-2xl px-3 py-1 border">Inspect</button>
      </div>
    </div>
  );
}
