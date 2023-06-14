/* eslint-disable react/prop-types */
import { useState } from "react";
import { heroFormData } from "../../data/heroFormData";

function HeroForm() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);
  const [minArea, setMinArea] = useState(0);
  const [maxArea, setMaxArea] = useState(500);
  return (
    <form className="p-8 max-w-sm mx-auto rounded-lg flex flex-col gap-4 bg-[rgba(255,255,255,.1)] backdrop-blur-sm">
      <h2 className="heading">Find a place to live globally</h2>
      {heroFormData.slice(0, 2).map((item) => (
        <SelectComponent data={item} key={item.type} />
      ))}
      <div className="flex items-center gap-4 justify-between">
        {heroFormData.slice(2, 4).map((item) => (
          <SelectComponent data={item} key={item.type} />
        ))}
      </div>
      <div className="flex items-center gap-4 justify-between">
        {heroFormData.slice(4, 6).map((item) => (
          <SelectComponent data={item} key={item.type} />
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="price">
          Price: ${minPrice} - ${maxPrice}
        </label>
        <input
          id="price"
          type="range"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          min={minPrice}
          max={maxPrice}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="area">
          Price: ${minArea} - ${maxArea}
        </label>
        <input
          id="area"
          type="range"
          value={minArea}
          onChange={(e) => setMinArea(e.target.value)}
          min={minPrice}
          max={maxPrice}
        />
      </div>
    </form>
  );
}

export default HeroForm;

function SelectComponent({ data }) {
  const [selectOption, setSelectOption] = useState("");
  console.log(selectOption);
  return (
    <div className="flex flex-col gap-2">
      <label className="capitalize font-semibold" htmlFor={data.type}>
        {data.label}
      </label>
      <select
        onChange={(e) => setSelectOption(e.target.value)}
        id={data.type}
        className="bg-transparent border p-2 capitalize text-sm rounded border-gray-500"
      >
        {data.options.map((option, index) => (
          <option className="capitalize" key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
