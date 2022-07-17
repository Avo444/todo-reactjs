function TodoItem({todo, Complete}) {
    return (
        <div className="todo-item">
            <p className="todo-content">{todo.title}</p>
            <button className="button todo-completed" aria-label="mark complete" onClick={(e) => {
                Complete(todo);
            }}>
                <svg className="icon"><use xlinkHref="#icon-checked"></use>
                </svg>
            </button>
        </div>
    );
}
export default TodoItem;