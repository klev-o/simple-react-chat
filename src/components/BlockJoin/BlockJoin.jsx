import React from 'react';
import socket from '../../socket';

function BlockJoin() {

    return (
        <div className='block-join'>
            <input type="text" placeholder='room'/>
            <input type="text" placeholder='name'/>
            <button className='btn btn-info'>Войти</button>
        </div>
    );
}

export default BlockJoin;
