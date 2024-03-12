import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const NewColorForm = ({ addColor }) => {
  const INITIAL_STATE = {
    name: '',
    value: '#000000'
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("handleChange - Name:", name, "Value:", value);
    setFormData(formData => ({
      ...formData,
      [name]: value 
    }));
  };

  const handleColorChange = (e) => {
    const hexValue = e.target.value;
    console.log("handleColorChange - Hex Value:", hexValue);
    setFormData(formData => ({
      ...formData,
      value: hexValue 
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Check if both color name and value are provided
    if (formData.name && formData.value) {
      addColor({ name: formData.name, hex: formData.value });
      console.log("Color Added:", { name: formData.name, hex: formData.value });
      setFormData(INITIAL_STATE);
      // Redirect to the home page after submitting the form
      history.push('/home');
    } else {
      // Handle error if color name or value is missing
      console.error("Color name and value are required.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="colorName">Color name</label>
      <input
        id="colorName"
        type="text"
        name="name"
        placeholder="Enter a color name (e.g., pink)."
        value={formData.name}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="colorValue">Choose a color</label>
      <input
        id="colorValue"
        type="color"
        name="value"
        value={formData.value}
        onChange={handleColorChange}
      />
      <br />
      <button type="submit">Add this color</button>
    </form>
  );
}

export default NewColorForm;