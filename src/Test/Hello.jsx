import React from 'react'
import FormComponent from './FormComponent'

const Hello = ({ inputList, setInputList }) => {

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
        console.log("list", list);
        console.log("index", index);
        console.log("name", name);
    };

    const handleAddClick = () => {
        setInputList([...inputList, {
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
    };

    const handleAddClickCopy = (index) => {
        setInputList([...inputList, Object.assign({}, inputList[index])]);
        // Object.assign({} , inputList[index])
    };

    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    return (
        <div className='container mb-4 p-4 mt-5' style={{ border: '1px solid black' }}>
            {inputList.map((data, index) => {
                return (
                    <FormComponent
                        data={data}
                        index={index}
                        inputList={inputList}
                        setInputList={setInputList}
                        handleInputChange={handleInputChange}
                        handleAddClick={handleAddClick}
                        handleRemoveClick={handleRemoveClick}
                        handleAddClickCopy={() => handleAddClickCopy(index)}
                    />
                );
            })}
        </div>
    )
}

export default Hello;