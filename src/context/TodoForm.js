import { toBeEmpty } from '@testing-library/jest-dom/dist/matchers';
import {useState} from 'react';

function TodoForm({addItem}) {
    const [value, setValue] = useState("");
    return (
        <header className="header">
        <h1>Todo List</h1>
        <svg id="defs" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <symbol className="icon icon-checked" id="icon-checked" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <polyline points="20 6 9 17 4 12"></polyline>
            </symbol>
            <symbol className="icon icon-delete" id="icon-delete" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
            </symbol>
            <symbol className="icon icon-add" id="icon-add" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
            </symbol>
        </defs>
        </svg>
        <form className="todo-form" onSubmit={(e) => {
            e.preventDefault();
            addItem(value);
            setValue("");
        }}>
            <input type="text" name="todo-input" id="todo-input" className="todo-input" value={value} onChange={(e)=>{
                setValue(e.target.value);
            }} />
            <button id="todo-submit" className="button todo-submit" type="submit">
                <svg className="icon"><use xlinkHref="#icon-add" /></svg>
            </button>
        </form>
        </header>
    );
}
export default TodoForm;