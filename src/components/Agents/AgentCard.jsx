/* eslint-disable react/prop-types */
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { FaRegEnvelope } from "react-icons/fa";

function AgentCard({ item }) {
  return (
    <div className="flex h-[275px]">
      <img
        className="w-[265px] h-full object-cover object-center rounded-lg rounded-tr-none rounded-br-none"
        src={item.image}
        alt={item.name}
      />
      <div className="flex flex-col justify-between w-[265px] h-full bg-color-primary-dark p-4 rounded-lg rounded-tl-none rounded-bl-none">
        <div className="flex font-bold text-[#4b55c4] items-center gap-10">
          <h3 className="">{item.name}</h3>
          <button className="flex items-center justify-center gap-2">
            <span className="p-2 border border-[#4b55c4] border-dashed rounded-full">
              <AiOutlineHeart />
            </span>
            <span>{item.likes}</span>
          </button>
        </div>
        <h4 className="text-lg font-bold">{item.jobTitle}</h4>
        <p className="flex items-center gap-1 text-sm">
          <FaRegEnvelope />
          <span>{item.email}</span>
        </p>
        <p className="text-[13px] text-gray-300 font-semibold">
          {item.description}
        </p>
        <button className="blueGradient capitalize w-fit px-8 py-2 text-sm flex items-center gap-2 rounded-full font-bold">
          <AiOutlineEye size={20} />
          <span>View portfolio</span>
        </button>
      </div>
    </div>
  );
}

export default AgentCard;
