import React from 'react';
import io from 'socket.io-client';
import socket from './socket';
import BlockJoin from "./components/BlockJoin/BlockJoin";

//const socket = io('http://localhost:9999')

function App() {

    // const connectSocket = () => {
    //     io('http://localhost:9999')
    // }

    return (
        <div className="wrapper">
            <BlockJoin />
        </div>
    );
}

export default App;
