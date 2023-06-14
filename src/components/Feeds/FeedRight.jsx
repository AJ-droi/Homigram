/* eslint-disable react/prop-types */
import { feedCardData } from "../../data/feedCardData";
import bgVacancy from "../../assets/feed/vacancy.jpg";

function FeedRight() {
  const style = {
    backgroundImage: `url(${bgVacancy})`,
  };
  return (
    <div className="p-6 rounded-lg bg-color-primary-dark">
      {/* Heading */}
      <h2 className="mb-6 text-lg font-bold">Connect Agents Anywhere</h2>
      {/* Agent List */}
      <ul className="flex flex-wrap lg:flex-nowrap items-center justify-between lg:justify-center lg:flex-col gap-4 p-4 rounded-md bg-color-primary-dark-2 mb-6">
        {feedCardData.map((item) => (
          <AgentItem key={item.id} item={item} />
        ))}
      </ul>
      {/* New Vacancies */}
      <div className="">
        <h3 className="font-bold text-lg mb-6">New Vacancies</h3>
        <div
          style={style}
          className="w-full h-[200px] bg-center bg-cover bg-no-repeat"
        ></div>
      </div>
    </div>
  );
}

export default FeedRight;

function AgentItem({ item }) {
  return (
    <li className="flex items-center gap-2">
      <img
        src={item.image}
        alt={item.author.split(" ")[0]}
        className="w-[50px] rounded"
      />
      <div className="text-sm">
        <h3 className="capitalize">{item.author.split(" ")[0]}</h3>
        <p
          className={`font-medium
          ${
            item.status === "Online"
              ? "text-green-600"
              : item.status === "Busy"
              ? "text-red-600"
              : "text-red-400"
          }`}
        >
          {item.status}
        </p>
        <p className="capitalize">{item.location}</p>
      </div>
    </li>
  );
}
