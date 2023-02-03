import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const FormComponent = ({
    data, index, inputList, setInputList, handleAddClick, handleRemoveClick,
    handleAddClickCopy
}) => {

    const navigate = useNavigate();

    const handleInputChange = (e, index) => {
        const { name, value, type } = e.target;
        const list = [...inputList];
        
        if (type === "checkbox") {
            list[index][name] = !value;
        }

        list[index][name] = value;
        setInputList(list);
        console.log("value", typeof value);
        console.log("index",index);
        console.log("name",name);
    };

    const options = ['Select', 'One', 'Two', 'Three'];
    const optionsForType = ['Select', 'Call', 'Put'];
    const optionsForExpiry = ['Select', 'Weekly', 'Monthly'];
    const optionsForStrike = ['Select', 'StrikeType', 'PremiumRange'];
    const optionssimpleMomentum = ['Select', 'points Up', 'points Down'];
    const optiontrailSL = ['Select', 'points', 'percentage'];

    const navigatetoOneOne = () => {
        navigate('/SummaryPage');
    };

    const [isReadOnly, setIsReadOnly] = useState(false)
    const [isReadOnlyTL, setIsReadOnlyTL] = useState(false)

    return (
        <div className='form_div'>
            <div className='row p-1 m-0 border-0 mt-4'>
                <div className='row'>
                    <div className='col-sm-2'><h6>Total Lot</h6></div>
                    <div className='col-sm-2'><h6>Postion</h6></div>
                    <div className='col-sm-2'><h6>Option Type</h6></div>
                    <div className='col-sm-2'><h6>Expiry</h6></div>
                    <div className='col-sm-2'><h6>Select Strike Type</h6></div>
                    <div className='col-sm-2'><button onClick={handleAddClickCopy}>copy</button></div>
                </div>
                <div className='row'>
                    <div className='col-sm-2'>
                        <input type="number" onChange={e => handleInputChange(e, index)} name="inputText" value={data.inputText} style={{ width: '8vw' }} />
                    </div>
                    <div className='col-sm-2'>
                        <select class="form-select" onChange={e => handleInputChange(e, index)} name="positionType" value={data.positionType}>
                            {
                                options.map((option, index) => {
                                    return <option key={index} >
                                        {option}
                                    </option>
                                })
                            }
                        </select>
                    </div>
                    <div className='col-sm-2'>
                        <select class="form-select" onChange={e => handleInputChange(e, index)} name="optionType" value={data.optionType} >
                            {
                                optionsForType.map((option, index) => {
                                    return <option key={index} >
                                        {option}
                                    </option>
                                })
                            }
                        </select>
                    </div>
                    <div className='col-sm-2'>
                        <select class="form-select" onChange={e => handleInputChange(e, index)} name="ExpiryType" value={data.ExpiryType} >
                            {
                                optionsForExpiry.map((option, index) => {
                                    return <option key={index} >
                                        {option}
                                    </option>
                                })
                            }
                        </select>
                    </div>
                    <div className='col-sm-2'>
                        <select class="form-select" onChange={e => handleInputChange(e, index)} name="selectStrikeCriteria" value={data.selectStrikeCriteria} >
                            {
                                optionsForStrike.map((option, index) => {
                                    return <option key={index} >
                                        {option}
                                    </option>
                                })
                            }
                        </select>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-sm-5 mt-5' style={{ marginLeft: '1vw' }}><h6>Simple Momentum</h6></div>
                <div className='col-sm-5 mt-5' style={{ marginLeft: '1vw' }}><h6>Total SL</h6></div>
            </div>
            <div className='row'>
                <div className='col-sm-4' >
                    <input type="checkbox" style={{ marginLeft: '1vw' }} onChange={e => handleInputChange(e, index)} value={data.check_one} name="check_one" checked={data.check_one}/>
                </div>
                <div className='col-sm-4'>
                    <input type="checkbox" style={{ marginLeft: '4vw' }} onChange={e => handleInputChange(e, index)} value={data.check_two} name="check_two" checked={data.check_two} />
                </div>
            </div>
            <div className='row p-1 m-0 border-0 mt-2'>
                <div className='col-sm-2'>
                    <select class="form-select" onChange={e => handleInputChange(e, index)} disabled={!data.check_one} name="simpleMomentum" value={data.simpleMomentum} >
                        {
                            optionssimpleMomentum.map((option, index) => {
                                return <option key={index} >
                                    {option}
                                </option>
                            })
                        }
                    </select>
                </div>
                <div className='col-sm-1' style={{ marginRight: '10vw' }}>
                    <input type="number" disabled={!data.check_one} onChange={e => handleInputChange(e, index)} name="simpleMomentumValue" value={data.simpleMomentumValue} style={{ width: '8vw' }} />
                </div>

                <div className='col-sm-2'>
                    <select class="form-select" disabled={!data.check_two} onChange={e => handleInputChange(e, index)} name="trailSL" value={data.trailSL} >
                        {
                            optiontrailSL.map((option, index) => {
                                return <option key={index} >
                                    {option}
                                </option>
                            })
                        }
                    </select>
                </div>
                <div className='col-sm-1'>
                    <input type="number" onChange={e => handleInputChange(e, index)} name="trailSLvalue" value={data.trailSLvalue} disabled={!data.check_two} style={{ width: '8vw' }} />
                </div>
            </div>
            <hr />
            <div className='Button_add mt-4 mb-3'>
                {inputList.length - 1 === index && <button class="btn btn-success btn-lg"
                    onClick={handleAddClick}> <span className='plus_btn'>Add Leg</span></button>}
            </div>
            <div className='next_page'>
                {inputList.length !== 1 && <>
                    <button type="button" class="btn btn-primary btn-lg next_btn" onClick={() => handleRemoveClick(index)}>Delete</button>
                </>}
                {inputList.length - 1 === index && <>
                    <button type="button" className="btn btn-primary btn-lg next_btn" onClick={navigatetoOneOne}>Submit</button>
                </>
                }
            </div>
        </div>
    );
}

export default FormComponent