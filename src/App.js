import React from 'react';
import io from 'socket.io-client';
import socket from './socket';
import BlockJoin from "./components/BlockJoin/BlockJoin";
import reducer from './reducer';
import axios from "axios";
import Chat from "./components/Chat/Chat";


//const socket = io('http://localhost:9999')

function App() {

    // const connectSocket = () => {
    //     io('http://localhost:9999')
    // }

    const [state, dispatch] = React.useReducer(reducer, {
        joined: false,
        room: null,
        userName: null,
        users: [],
        messages: [],
    });

    const onLogin = async (obj) => {
        dispatch({
            type: 'JOINED',
            payload: obj,
        });
        socket.emit('ROOM:JOIN', obj);
    };

    console.log(state)

    React.useEffect(() => {
        socket.on('ROOM:SET_USERS', (users) => {
            console.log('Новый пользователь присоединился!')
            console.log(users)
            dispatch({
                type: 'SET_USERS',
                payload: users,
            });
        });
    }, []);

    return (
        <div className="wrapper">
            {!state.joined ? (
                <BlockJoin onLogin={onLogin} />
            ) : (
                <Chat {...state} />
            )}
        </div>
    );
}

export default App;
