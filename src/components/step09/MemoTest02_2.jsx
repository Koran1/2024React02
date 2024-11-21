import { useState } from "react";

function MemoTest02_2() {
    console.log("component 렌더링")
    const [query, setQuery] = useState('');
    const items = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'];

    const filterItem = items.filter((item) => {
        console.log("filter 하는중 ")
        return item.toLowerCase().includes(query.toLowerCase());
    })

    return (
        <div>
            <h3>Memo 사용 X</h3>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            <ul>
                {filterItem.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default MemoTest02_2;