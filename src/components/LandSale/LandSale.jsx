import LandSaleCard from "./LandSaleCard";
import { landSaleData } from "../../data/landSaleData";

function LandSale() {
  return (
    <section className="spacing-x py-10 bg-[#c6bef8]">
      <hr className="w-20 mx-auto duration-300 cursor-pointer hover:w-40 text-color-primary-dark py-4" />
      <ul className="flex justify-center flex-wrap gap-6">
        {landSaleData.map((item) => (
          <LandSaleCard key={item.title} item={item} />
        ))}
      </ul>
    </section>
  );
}

export default LandSale;
