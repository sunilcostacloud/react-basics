import { useState } from "react";

const MultipleCheckBoxes = () => {
  // State to manage multiple checkboxes dynamically
  const [checkboxes, setCheckboxes] = useState([
    { name: "checkbox1", isChecked: false },
    { name: "checkbox2", isChecked: false },
    { name: "checkbox3", isChecked: false },
  ]);

  // Function to handle checkbox state change
  const handleCheckboxChange = (index) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index].isChecked = !newCheckboxes[index].isChecked;
    setCheckboxes(newCheckboxes);
  };

  return (
    <div>
      {checkboxes.map((checkbox, index) => (
        <div key={index}>
          <label>
            {`Checkbox ${index + 1}: `}
            <input
              type="checkbox"
              name={checkbox.name}
              checked={checkbox.isChecked}
              onChange={() => handleCheckboxChange(index)}
            />
          </label>
          <div>
            {checkbox.isChecked ? <h1>Checked</h1> : <h2>Unchecked</h2>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MultipleCheckBoxes;
