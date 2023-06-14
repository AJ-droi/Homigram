import AgentSection from "../../components/Agents/AgentSection";
import Feed from "../../components/Feeds/Feed";
import Hero from "../../components/Hero/Hero";
import LandSale from "../../components/LandSale/LandSale";
import LandedProperty from "../../components/LandedProperty/LandedProperty";
import MarketBrief from "../../components/MarketBrief/MarketBrief";
import Property from "../../components/Property/Property";

const Home = () => {
  return (
    <div className="bg-color-primary-dark text-color-white">
      <Hero />
      <Feed />
      <MarketBrief />
      <Property />
      <LandedProperty />
      <LandSale />
      <AgentSection />
    </div>
  );
};

export default Home;
