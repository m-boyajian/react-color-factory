import { useState } from "react";

const initialColors = [
  { name: "red", hex: "#FF0000" },
  { name: "green", hex: "#00FF00" },
  { name: "blue", hex: "#0000FF" }
];

const useColors = () => {
  const [colors, setColors] = useState(initialColors);
  console.log("Current list of colors:", colors);

  const addColor = (newColor) => {
    setColors((prevColors) => {
      const updatedColors = [...prevColors, newColor];
      console.log("Updated list of colors:", updatedColors);
      return updatedColors;
    });
  };

  return { colors, addColor };
};

export default useColors;