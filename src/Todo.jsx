import React, { useState } from "react";

const Todo = () => {
  //initial value of the array items which will store our todo list
  //initial value of usesr input set to empty string
  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");

  const addTodoList = () => {
    //if the value of user input isn't empty string
    //then add it to our array then set user input value to empty string
    if (value.trim() !== "") {
      setItems([...items, value]);
      setValue("");
    }
  };

  const deleteItem = (itemDel) => {
    //set the array by updating it without the index of the given item
    setItems((prevItems) => prevItems.filter((_, index) => index !== itemDel));
  };
  return (
    <div>
      <h1>TodoList DevOps - Show Jenkins CI</h1>
      <div className="inputDiv">
        <input
          value={value}
          //update the todo value by taking the user input on change
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter a todo item"
        />
        <button onClick={addTodoList}>Add</button>
      </div>

      {/* Display the list of todo items */}
      <div>
        {items.map((item, index) => (
          <div key={index} className="items">
            <span>
              {index + 1} - {item}
            </span>
            <span>
              <button onClick={() => deleteItem(index)}>Delete</button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
