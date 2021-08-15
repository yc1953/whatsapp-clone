import { Avatar } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import './SidebarChat.css';
import db from "./Firebase";
import { Link } from 'react-router-dom';

function SidebarChat({ id, addNewChat, name }) {
    const [seed, setSeed] = useState('');
    const [messages, setMessages] = useState('');

    useEffect(() => {
        if (id) {
            db.collection("rooms")
                .doc(id)
                .collection("messages")
                .orderBy("timestamp", "desc")
                .onSnapshot((snapshot) => (
                    setMessages(snapshot.docs.map((doc) => doc.data()))
                ))
        }
    }, [id]);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const createNewChat = () => {
        const roomName = prompt("Enter the name of chat");

        if (roomName) {
            /* Do some clever database stuff here */
            db.collection('rooms').add({
                name: roomName
            })
        }
    }

    return !addNewChat ? (
        <Link to={`/rooms/${id}`} style={{ textDecoration: 'none', color: '#000' }}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="sidebarChat__info">
                    <h2>{name}</h2>
                    {messages[0] && <p className="sidebarChat__lastMessage">{messages[0].message.substring(0, 25)} {messages[0].message.length > 25 ? <span>...</span> : <span></span>}</p>}
                </div>
            </div>
        </Link>
    ) : (
        <div onClick={createNewChat} className="sidebarChat">
            <h2>Add New Chat</h2>
        </div>
    );
}

export default SidebarChat;
