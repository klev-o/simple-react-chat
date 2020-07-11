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
        const { data } = await axios.get(`/rooms/${obj.room}`);
        dispatch({
            type: 'SET_DATA',
            payload: data,
        });
    };

    const addMessage = (message) => {
        dispatch({
            type: 'NEW_MESSAGE',
            payload: message,
        });
    };

    const setUsers = (users) => {
        dispatch({
            type: 'SET_USERS',
            payload: users,
        });
        console.log('Новый пользователь присоединился!')
        console.log(users)
    };

    console.log(state)

    React.useEffect(() => {
        socket.on('ROOM:SET_USERS', setUsers);
        socket.on('ROOM:NEW_MESSAGE', addMessage);
    }, []);

    return (
        <div className="wrapper">
            {!state.joined ? (
                <BlockJoin onLogin={onLogin} />
            ) : (
                <Chat {...state} onAddMessage={addMessage}  />
            )}
        </div>
    );
}

export default App;
