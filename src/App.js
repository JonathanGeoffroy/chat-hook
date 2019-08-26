import React, {useState, useEffect} from 'react';
import {Search} from "./Search";
import {Messages} from "./Messages";

import {ChatService} from "./ChatService";

const chatService = new ChatService();

function App() {
    const [room, setRoom] = useState('React');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        chatService.subscribe(room, m => {
            setMessages(newMessages => [m, ...newMessages]);
        });

        return () => chatService.unsubscribe(room);
    }, [room]);

    return <>
        <Search onChange={setRoom}/>
        <Messages messages={messages}/>
    </>;
}

export default App;
