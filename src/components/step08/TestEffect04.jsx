import { useEffect, useState } from "react";

function TestEffect04() {
    // API 에서 가져온 data를 저장
    const [data, setData] = useState([]);
    // Error 상태 관리
    const [error, setError] = useState(null);

    useEffect(() => {
        // API 호출 by routing
        fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
            .then((response) => {
                if (!response.ok) {  // 접속이 잘 안 된 경우
                    throw new Error('Network failure!');
                }
                return response.json();     // 응답 data를 JSON 형태로 변환 (비동기 처리)
            })
            //.then((data) => setData(data))  // 위에서 JSON 형태로 변환된 data를 저장
            .then((data) => setData(data.slice(0, 10)))  // data 개수 제한
            .catch((error) => setError(error.message))
    }, []); // 처음 한 번만 실행


    return (
        <div>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        <h3>제품명 : {item.name}</h3>
                        <h3>가격 : {item.price}</h3>
                        <img alt="img" src={item.image_link} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TestEffect04;