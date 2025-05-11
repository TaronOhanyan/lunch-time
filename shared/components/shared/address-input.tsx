"use client";

import React, { useState } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

interface Props {
  onChange?: (value?: string) => void;
}

export const AddressInput: React.FC<Props> = ({ onChange }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete();

  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setActiveIndex(-1);
  };

  const handleSelect = async (description: string) => {
    setValue(description, false);
    clearSuggestions();
    const results = await getGeocode({ address: description });
    const { lat, lng } = await getLatLng(results[0]);
    console.log("Selected Address:", description);
    console.log("Coordinates:", lat, lng);
    onChange?.(description);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (status !== "OK") return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % data.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + data.length) % data.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0 && data[activeIndex]) {
        handleSelect(data[activeIndex].description);
      }
    } else if (e.key === "Escape") {
      clearSuggestions();
      setActiveIndex(-1);
    }
  };

  return (
    <div className="relative">
      <input
        value={value}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        disabled={!ready}
        placeholder="Enter an address"
        className="border p-2 rounded w-full bg-[#f5f4f3]"
      />
      {status === "OK" && (
        <ul className="absolute z-10 border rounded shadow bg-[#f5f4f3] w-full mt-1">
          {data.map(({ place_id, description }, index) => (
            <li
              key={place_id}
              onClick={() => handleSelect(description)}
              className={`p-2 hover:bg-[#f5f4f3] cursor-pointer ${
                index === activeIndex ? "bg-[#f5f4f3]" : ""
              }`}
            >
              {description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
