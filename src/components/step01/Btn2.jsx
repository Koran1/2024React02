import { Button } from "@mui/material";

// 선언식 - Hoisting 됨
// function Btn2({ name }) {
//     return (
//         <div>
//             <Button variant="contained" onClick={() => { console.log(name) }}>{name}</Button>
//         </div>
//     );
// }

// 표현식 - 실행할 때 생성된다
// const Btn2 = ({ name }) => (
//     <Button variant="contained" onClick={() => { console.log(name) }}>{name}</Button>
// )

// const Btn2 = ({ name }) => (
//     <Button variant="contained" onClick={() => { console.log(name) }}
//         onMouseLeave={() => console.log(name + "leaves")}
//         onDoubleClick={() => console.log(name + "double clicks")}
//         onContextMenu={() => console.log(name + "context menu")}
//     >{name}</Button>
// )

// which = 이벤트 핸들러에서 이벤트의 유형이나 성격을 나타내는 역할을 한다
// const handlerEvent = (name, which) => {
//     console.log(name, which)
// };
// const Btn2 = ({ name }) => (
//     <Button variant="contained"
//         onMouseEnter={() => handlerEvent(name, "mouse enters")}
//         onMouseLeave={() => handlerEvent(name, "mouseLeaves")}
//         onDoubleClick={() => handlerEvent(name, "double clicks")}
//         onContextMenu={() => handlerEvent(name, "context menu")}
//     >{name}</Button>
// )

// e : 이벤트 객체
const handlerEvent = (name, e) => {
    console.log(name, e)
};
const Btn2 = ({ name }) => (
    <Button variant="contained"
        onMouseEnter={(e) => handlerEvent(name, e)}
        onMouseLeave={(e) => handlerEvent(name, e)}
        onDoubleClick={(e) => handlerEvent(name, e)}
        onContextMenu={(e) => handlerEvent(name, e)}
    >{name}</Button>
)

export default Btn2;    