import { useMemo, useState } from "react";

function MemoTest02_1() {
    console.log("component 렌더링")
    const [query, setQuery] = useState('');
    const items = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'];

    const filterItem = useMemo(() => {
        console.log("useMemo 사용")
        return items.filter((k) => k.toLowerCase().includes(query.toLowerCase()));
    }, [query])

    return (
        <div>
            <h3>Memo 사용 O</h3>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            <ul>
                {filterItem.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default MemoTest02_1;