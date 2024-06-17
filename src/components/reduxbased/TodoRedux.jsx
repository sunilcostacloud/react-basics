import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  updateTodo,
} from "../../redux/features/todoSlice";
import { v4 as uuidv4 } from "uuid";

const TodoRedux = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.todo);
  const [text, setText] = useState("");
  const [selectedItem, setSelectedItem] = useState({});
  const [eidtText, setEditText] = useState("");
  const [editedMode, setEditedMode] = useState(false);

  const handleAdd = () => {
    if (text.trim() !== "") {
      const newItem = {
        id: uuidv4(),
        text: text.trim(),
      };
      dispatch(addTodo(newItem));
    }

    setText("");
  };

  const handleDelete = (item) => {
    dispatch(deleteTodo(item));
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
    setEditText(item.text);
    setEditedMode(true);
  };

  const handleUpdate = () => {
    const payload = {
      selectedItem,
      eidtText,
    };

    dispatch(updateTodo(payload));

    setSelectedItem({});
    setEditText("");
    setEditedMode(false);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
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

export default TodoRedux;
