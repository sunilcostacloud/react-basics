import { useState } from "react";

const Select = () => {
  const [selectedValue, setSelectedValue] = useState("");

  // Function to handle changes in the dropdown selection
  const handleInputChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <label>
        Dropdown:
        <select
          name="dropdown"
          value={selectedValue}
          onChange={handleInputChange}
        >
          <option value="">Select...</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </label>
      <h1>{selectedValue}</h1>
    </div>
  );
};

export default Select;
