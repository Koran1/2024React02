import { Button } from "@mui/material";
import { useState } from "react";

function ToDoList() {
    const [text, setText] = useState('');
    const [list, setList] = useState(
        [
            {
                title: 'Learn React',
            },
            {
                title: 'Build Project',
            }
        ]);


    const deleteTodo = (index) => {
        // (_, i) = filter 메서드의 콜백 함수 매개변수
        // _ = 배열 사용 안함이라는 뜻 
        // i = 배열의 index
        setList(list.filter((_, i) => i !== index));
    }

    const addList = () => {
        if (text.trim() === '') {
            alert('빈 칸은 추가할 수 없습니다!');
            setText('');
            return;
        }
        let item = { title: text.trim() };
        // setList(list.concat(item))
        setList([...list, item]);
        setText('');
    }

    return (
        <div className="todolist">
            <h2>TodoList</h2>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item.title}&nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteTodo(index)}>Delete</button></li>
                ))}
            </ul>
            <p>Typing : {text}</p>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <Button variant="contained" onClick={addList}>Add New Task</Button>
        </div>
    );
}
export default ToDoList;