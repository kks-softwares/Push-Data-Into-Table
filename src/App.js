import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hello from './Test/Hello';
import Summary from './Test/Summary';
import { useState } from 'react';

function App() {


  const [inputList, setInputList] = useState([{
    inputText: "",
    positionType: "",
    optionType: "",
    ExpiryType: "",
    selectStrikeCriteria: "",
    simpleMomentum: "",
    trailSL: "",
    simpleMomentumValue: "",
    trailSLvalue: "",
    check_one: false,
    check_two: false
  }]);


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Hello inputList={inputList} setInputList={setInputList} />}></Route>
          <Route exact path="/SummaryPage" element={<Summary inputList={inputList} setInputList={setInputList} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;