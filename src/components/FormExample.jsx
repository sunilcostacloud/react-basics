import { useState } from "react";

const FormExample = () => {
  const [formData, setFormData] = useState({
    input: "",
    dropdown: "",
    checkbox: false,
    radio: "",
    date: "",
    time: "",
  });
  const [submittedData, setSubmittedData] = useState([]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
    setFormData({
      input: "",
      dropdown: "",
      checkbox: false,
      radio: "",
      date: "",
      time: "",
    });
  };

  const handleClear = () => {
    setFormData({
      input: "",
      dropdown: "",
      checkbox: false,
      radio: "",
      date: "",
      time: "",
    });
    setSubmittedData([]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Input:
          <input
            type="text"
            name="input"
            value={formData.input}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Dropdown:
          <select
            name="dropdown"
            value={formData.dropdown}
            onChange={handleInputChange}
          >
            <option value="">Select...</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </label>
        <br />
        <label>
          Checkbox:
          <input
            type="checkbox"
            name="checkbox"
            checked={formData.checkbox}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Radio:
          <label>
            <input
              type="radio"
              name="radio"
              value="optionA"
              checked={formData.radio === "optionA"}
              onChange={handleInputChange}
            />{" "}
            Option A
          </label>
          <label>
            <input
              type="radio"
              name="radio"
              value="optionB"
              checked={formData.radio === "optionB"}
              onChange={handleInputChange}
            />{" "}
            Option B
          </label>
        </label>
        <br />
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Time:
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleClear}>
          Clear Form
        </button>
      </form>

      <div>
        <h2>Submitted Data:</h2>
        {submittedData.map((data, index) => (
          <div key={index}>
            <p>Input: {data.input}</p>
            <p>Dropdown: {data.dropdown}</p>
            <p>Checkbox: {data.checkbox ? "Checked" : "Unchecked"}</p>
            <p>Radio: {data.radio}</p>
            <p>Date: {data.date}</p>
            <p>Time: {data.time}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormExample;
