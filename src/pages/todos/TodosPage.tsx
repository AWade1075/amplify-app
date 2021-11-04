import { useState } from 'react';
function TodosPage() {
  const [todos, setTodos] = useState([
    { label: 'Make Dinner', checked: false },
  ]);

  const updateTodo = (index: any) => {
    console.log(index);
    const updatedTodoItem = {
      ...todos[index],
      checked: !todos[index]?.checked,
    };
    setTodos(todos.splice(index, 1, updatedTodoItem));
    console.log(todos);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          {todos.map((todo, index) => (
            <>
              <input
                type="checkbox"
                name={'todo-' + index}
                key={index}
                checked={todo.checked}
                onChange={() => updateTodo(index)}
              />
              <label>{todo?.label}</label>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodosPage;
