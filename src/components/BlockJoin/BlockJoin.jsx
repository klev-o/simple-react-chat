import React from 'react';
import axios from 'axios'
import socket from '../../socket';

function BlockJoin({onLogin}) {
    const [room, setRoom] = React.useState('')
    const [userName, setUserName] = React.useState('')

    const onEnter = () => {
        if (!room || !userName) {
            return alert('Incorrect data')
        }
        console.log(room, userName)
        axios.post('/rooms', {room, userName}).then(onLogin)
    }

    return (
        <div className='block-join'>
            <input type="text" placeholder='room' value={room} onChange={(e) => setRoom(e.target.value) }/>
            <input type="text" placeholder='name' value={userName} onChange={(e) => setUserName(e.target.value) }/>
            <button onClick={onEnter} className='btn btn-info'>Войти</button>
        </div>
    );
}

export default BlockJoin;
