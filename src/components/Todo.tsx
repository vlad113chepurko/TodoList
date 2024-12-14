import { useState } from "react";
import List from './List';

interface TodoProps {
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

const Todo: React.FC<TodoProps> = ({ setCount }) => {
    const [task, setTask] = useState<string>('');
    const [items, setItems] = useState<string[]>([]);

    function handleChanges(e: React.ChangeEvent<HTMLInputElement>) {
        setTask(e.target.value);
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setCount((prevCount) => prevCount + 1);
        setItems([...items, task]);
        setTask('');
    }

    function handleDelete(index: number) {
        setCount((prevCount) => prevCount - 1);
        setItems(items.filter((_, i) => i !== index));
    }

    function handleDeleteAll() {
        setCount(0);
        setItems([]);
    }

    return (
        <form onSubmit={handleSubmit} action="">
            {items.length > 1 && <button
                type="button"
                className="delete-all-button"
                onClick={handleDeleteAll}>Delete All</button>}

            <input onChange={handleChanges} value={task} type="text" />
            <button className='add-button' type="submit">Add</button>
            <List items={items} handleDelete={handleDelete} />
        </form>
    );
}

export default Todo;    