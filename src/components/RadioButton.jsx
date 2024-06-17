import { useState } from "react";

const RadioButton = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h2>Choose an option:</h2>
      <label>
        <input
          type="radio"
          value="option1"
          checked={selectedOption === "option1"}
          onChange={handleOptionChange}
        />
        Option 1
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="option2"
          checked={selectedOption === "option2"}
          onChange={handleOptionChange}
        />
        Option 2
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="option3"
          checked={selectedOption === "option3"}
          onChange={handleOptionChange}
        />
        Option 3
      </label>
      <br />
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
};

export default RadioButton;
