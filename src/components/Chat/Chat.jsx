import React from 'react';
import socket from '../../socket';
import './chat.css'

function Chat({ users, messages, userName, room }) {
    const [messageValue, setMessageValue] = React.useState('');

    return (
        <div className="chat">
            <div className="chat-users">
                Комната: <b>{room}</b>
                <hr />
                <b>Онлайн ({users.length}):</b>
                <ul>
                    {users.map((name, idx) => (
                        <li key={name + idx}>{name}</li>
                    ))}
                </ul>
            </div>
            <div className="chat-messages">
                <div className="messages">
                    <div className="message">
                        <p>test</p>
                        <div>
                            <span>testtest</span>
                        </div>
                    </div>
                </div>
                <form>
          <textarea
              value={messageValue}
              onChange={(e) => setMessageValue(e.target.value)}
              className="form-control"
              rows="3"></textarea>
                    <button type="button" className="btn btn-primary">
                        Отправить
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Chat;
