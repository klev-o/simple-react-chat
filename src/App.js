import React from 'react';
import io from 'socket.io-client';
import socket from './socket';
import BlockJoin from "./components/BlockJoin/BlockJoin";
import reducer from './reducer';
import axios from "axios";


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

    const onLogin = () => {
        dispatch({
            type: 'JOINED',
            payload: true,
        });
    };

    console.log(state)

    return (
        <div className="wrapper">
            {!state.joined ? (
                <BlockJoin onLogin={onLogin} />
            ) : (
                'null'
            )}
        </div>
    );
}

export default App;
