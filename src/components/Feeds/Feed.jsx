import { feedCardData } from "../../data/feedCardData";
import FeedCard from "./FeedCard";
import FeedRight from "./FeedRight";

function Feed() {
  return (
    <section className="spacing-x py-20 bg-color-primary-dark-2 flex flex-col lg:flex-row gap-8">
      {/* Left */}
      <div className="w-full lg:w-9/12">
        {/* Top */}
        <div className="top mb-10">
          <h2 className="text-2xl font-bold">Feeds</h2>
          <span className="text">Showing 1-5 of 69 listings</span>
        </div>
        {/* Feed Cards */}
        <div className="flex justify-center gap-6 flex-wrap">
          {feedCardData.map((item) => {
            return <FeedCard key={item.id} item={item} />;
          })}
        </div>
      </div>
      {/* Right */}
      <div className="w-full lg:w-3/12">
        <FeedRight />
      </div>
    </section>
  );
}

export default Feed;
