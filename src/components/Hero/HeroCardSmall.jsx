/* eslint-disable react/prop-types */

function HeroCardSmall({ text, count }) {
  return (
    <li className="w-[170px] h-[140px] bg-[rgba(255,255,255,.1)] backdrop-blur-sm flex flex-col justify-between items-center p-[30px]">
      <button className="bg-[#f13439] text-sm rounded-md px-4 py-1">
        {count}+
      </button>
      <p>{text}</p>
    </li>
  );
}

export default HeroCardSmall;
