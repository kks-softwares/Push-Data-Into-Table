import React from 'react'
import { useNavigate } from 'react-router-dom';

const Summary = ({ inputList }) => {
    const navigate = useNavigate();

    return (
        <div className='container-fluid' style={{ marginTop: '3vw' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2vw' }}>
                <h1>SUMMARY TABLE</h1>
            </div>
            {/* <span>Table {index + 1}</span> */}
            <div>
                <table class="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Lots</th>
                            <th scope="col">Postion</th>
                            <th scope="col">Option Type</th>
                            <th scope="col">Expiry</th>
                            <th scope="col">Strike Criteria</th>
                            <th scope="col">Simple Momentum</th>
                            <th scope="col">Total SL</th>
                        </tr>
                    </thead>
                    {inputList[0].inputText ? (
                        inputList?.map((data, index) => {
                            return (
                                <tbody>
                                    <tr>
                                        <td>{data?.inputText}</td>
                                        <td>{data?.positionType}</td>
                                        <td>{data?.optionType}</td>
                                        <td>{data?.ExpiryType}</td>
                                        <td>{data?.selectStrikeCriteria}</td>
                                        <td>{data?.simpleMomentum + " ," + data?.simpleMomentumValue}</td>
                                        <td>{data?.trailSL + " ," + data?.trailSLvalue}</td>
                                    </tr>
                                </tbody>
                            )
                        })
                    ) : (<span className='no_data_sum'><h6>NO DATA IN SUMMARY</h6></span>)}
                </table>
            </div>
            <div className='next_page'>
                <button type="button" class="btn btn-primary btn-lg NextButton" onClick={() => navigate(-1)}>BACK</button>
            </div>
        </div>
    )
}

export default Summary;