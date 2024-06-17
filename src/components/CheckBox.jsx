import { useState } from "react";

const CheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);

  // Function to handle checkbox state change
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <label>
        Checkbox:
        <input
          type="checkbox"
          name="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </label>
      <div>
        {isChecked ? <h1>Checked</h1> : <h2>Unchecked</h2>}
      </div>
    </div>
  );
};

export default CheckBox;
