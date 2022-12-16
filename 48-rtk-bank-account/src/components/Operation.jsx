import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { depositAction, withdrawAction } from '../actions/accountActions';

const Operation = () => {

    const [sum, setSum] = useState(1);
    const dispatch = useDispatch()

    return (
        <div className='container'>
            <div className='d-flex justify-content-center'>
                <button
                    className='btn btn-primary btn-lg'
                    onClick={() => dispatch(withdrawAction(sum))}
                >Withdraw</button>
                <input
                    className='form-control-lg text-center'
                    type='number'
                    value={sum}
                    onChange={e => setSum(+e.target.value)}
                />
                <button 
                    className='btn btn-primary btn-lg'
                    onClick={() => dispatch(depositAction(sum))}
                >Deposit</button>
            </div>
        </div>
    )
}

export default Operation