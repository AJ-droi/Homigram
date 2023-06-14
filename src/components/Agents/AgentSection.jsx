/* eslint-disable react/prop-types */
import Carousel from "react-grid-carousel";
import AgentCard from "./AgentCard";
import { agentRankingData } from "../../data/agentRankingData";

function AgentSection() {
  return (
    <section className="py-20 px-20 bg-color-primary-dark-2">
      <div className="text-center mb-10">
        <button className="blueGradient py-1 px-4 rounded">Award</button>
        <h2 className="text-xl font-bold mt-4">Agent Rankings</h2>
      </div>
      {/* Agent Carousel */}
      <Gallery data={agentRankingData} />
    </section>
  );
}

export default AgentSection;

function Gallery({ data }) {
  return (
    <Carousel cols={2} rows={1} gap={30} loop={true}>
      {data.map((el) => (
        <Carousel.Item key={el.id}>
          <AgentCard key={el.id} item={el} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
