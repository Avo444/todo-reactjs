import TodoItem from "./TodoItem";

function TodoList({todos, Complete}) {
    return (
        <div className="todo-list" id="todo-list">
            {
                todos.map((todo) => {
                    return (
                        <TodoItem todo={todo} key={todo.id} Complete={Complete} />
                    );
                })
            }
        </div>
    );
}
export default TodoList;