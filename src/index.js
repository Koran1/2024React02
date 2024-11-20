import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NumberCounter from './components/step01/NumberCounter';
import NumberCounter2 from './components/step01/NumberCounter2';
import InputExam from './components/step02/InputExam';
import CounterExam from './components/step03/CounterExam';
import CheckExam from './components/step03/CheckExam';
import ToDoList from './components/step04/ToDoList';
import UserProfile from './components/step05/UserProfile';
import TempConverter from './components/step06/TempConverter';
import InputForm from './components/step07/InputForm';
import DollarConverter from './components/hwDollarConv/DollarConverter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <NumberCounter /> */}
    {/* <NumberCounter2 /> */}
    {/* <InputExam /> */}
    {/* <CounterExam /> */}
    {/* <CheckExam /> */}
    {/* <ToDoList /> */}
    {/* <UserProfile /> */}
    {/* <TempConverter /> */}
    {/* <InputForm /> */}
    <DollarConverter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
