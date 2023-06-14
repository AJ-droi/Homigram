/* eslint-disable react/prop-types */

function LandedPropertyCard({ item }) {
  return (
    <div className="w-full">
      <img
        className="w-full h-[250px] object-cover"
        src={item.property.image}
        alt={item.author.name}
      />
      <div className="flex items-center text-start gap-4 my-8 h-16">
        <img
          className="rounded-full h-full w-16 object-cover"
          src={item.author.image}
          alt={item.author.name}
        />
        <div>
          <h3 className="font-semibold text-xl">{item.author.name}</h3>
          <span className="text-sm">{item.author.location}</span>
        </div>
      </div>
    </div>
  );
}

export default LandedPropertyCard;
