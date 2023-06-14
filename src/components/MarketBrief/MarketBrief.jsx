import React from "react";
import { marketBriefData } from "../../data/marketBriefData";
import MarketBriefItem from "./MarketBriefItem";

function MarketBrief() {
  return (
    <section className="px-6 py-20 bg-color-primary-dark-2">
      <h2 className="font-bold text-center md:text-start px-20 text-3xl mb-16">
        Location Market Briefing
      </h2>
      {/* Market Briefing Cards */}
      <ul className="flex gap-8 flex-wrap justify-center">
        {marketBriefData.map((item) => {
          return <MarketBriefItem key={item.id} item={item} />;
        })}
      </ul>
    </section>
  );
}

export default MarketBrief;
