import { useState } from "react";

const Todo = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [eidtText, setEditText] = useState("");
  const [editedMode, setEditedMode] = useState(false);

  const handleAddList = () => {
    if (text.trim !== "") {
      const newItem = {
        id: list.length + 1,
        text: text.trim(),
      };
      setList([...list, newItem]);
    }

    setText("");
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
    setEditText(item.text);
    setEditedMode(true);
  };

  const handleUpdate = () => {
    const updatedList = list.map(item => item.id === selectedItem.id ? {...item, text: eidtText}: item)
    setList(updatedList)
    setSelectedItem({})
    setEditText("");
    setEditedMode(false);
  };

  const handleDelete = (item) => {
    const newList = list.filter((li) => li.id !== item.id);
    setList(newList);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddList}>Add</button>
      {list?.map((item) => (
        <div key={item.id}>
          {item?.text}
          {editedMode && selectedItem?.id === item?.id ? (
            <>
              <input
                type="text"
                value={eidtText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={() => handleUpdate()}>Update</button>
            </>
          ) : (
            <button onClick={() => handleEdit(item)}>Edit</button>
          )}

          <button onClick={() => handleDelete(item)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
