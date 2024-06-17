import CheckBox from "./components/CheckBox";
import Counter from "./components/Counter";
import DateTimePicker from "./components/DateTimePicker";
import FormExample from "./components/FormExample";
import MultipleCheckBoxes from "./components/MultipleCheckBoxes";
import RadioButton from "./components/RadioButton";
import Select from "./components/Select";
import Timer from "./components/Timer";
import Todo from "./components/Todo";
import TodoRedux from "./components/reduxbased/TodoRedux";

const App = () => {
  return (
    <div>
      <Counter />
      <hr />
      <Todo />
      <hr />
      <Timer />
      <hr />
      <Select />
      <hr />
      <CheckBox />
      <hr />
      <MultipleCheckBoxes />
      <hr />
      <RadioButton />
      <hr />
      <DateTimePicker />
      <hr />
      <FormExample />
      <hr />
      <h1>Todo Redux</h1>
      <TodoRedux />
      <hr />
    </div>
  );
};

export default App;
