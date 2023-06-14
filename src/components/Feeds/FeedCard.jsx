/* eslint-disable react/prop-types */
import { BiMessageRounded } from "react-icons/bi";
import {
  FaThumbsDown,
  FaHandshake,
  FaHotel,
  FaArrowRight,
} from "react-icons/fa";

function FeedCard({ item }) {
  return (
    <div className="flex flex-col gap-2 rounded-lg p-6 w-full sm:w-[270px] bg-color-primary-dark ">
      <img src={item.image} className="w-[50px] rounded" alt={item.author} />
      <h3 className="text-2xl capitalize font-bold">{item.author}</h3>
      <span className="text-color-text-gray capitalize">{item.location}</span>

      <Reactions reactions={item.reaction} />

      <p className="item">New Deals!</p>
      <p className="text-color-text-gray">{item.description}</p>
      <span className="rounded bg-gray-400 p-1 w-fit text-color-primary-dark">
        <BiMessageRounded />
      </span>
      <div className="flex justify-end">
        <button className="text-color-accent-orange flex items-center gap-4">
          <span>Visit channel</span>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default FeedCard;

function Reactions({ reactions }) {
  return (
    <ul className="flex items-center text-sm gap-3">
      <li className="flex items-center gap-1 py-1 px-2 bg-color-text-gray rounded-lg font-semibold">
        <FaHandshake className="text-lg" />
        {reactions.likes}
      </li>
      <li className="flex items-center gap-1 py-1 px-2 bg-color-text-gray rounded-lg font-semibold">
        <FaThumbsDown className="" />
        {reactions.dislikes}
      </li>
      <li className="flex items-center gap-1 py-1 px-2 bg-color-text-gray rounded-lg font-semibold">
        <FaHotel />
        {reactions.price}
      </li>
    </ul>
  );
}
