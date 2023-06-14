import { propertyCardData } from "../../data/propertyCardData";
import PropertyCard from "./PropertyCard";

function Property() {
  return (
    <section className="spacing-x py-10 bg-color-primary-dark-2">
      <ul className="flex justify-center gap-8 flex-wrap">
        {propertyCardData.map((item) => (
          <PropertyCard key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}

export default Property;
