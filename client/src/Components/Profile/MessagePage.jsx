import React, { useState } from 'react';
import './MessagePage.css';
import { FaChevronLeft, FaPaperPlane, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const conversations = [
    { id: 1, name: 'Sunil', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZkdVqYEiqJwQDD8nN1SENRnkGgUH6ZMfdKQ&s', lastMessage: 'Hey there!' },
    { id: 2, name: 'Surya', picture: 'https://ashisheditz.com/wp-content/uploads/2024/03/stylish-whatsapp-dp-for-boys-hd.jpg', lastMessage: 'What\'s up?' },
    { id: 3, name: 'Sukumar', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9oHsGJf--aeyTS2HTk3atXJ8ogmoXRyzUbQ&s', lastMessage: 'I\'m there' },
    { id: 4, name: 'Emily White', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCyeH3vW5tixoNWmYBPCrGZZ7L5Y8DhW1NSA&s', lastMessage: '...' },
    { id:5,name:'Johnson',picture:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCMjZw2HeLWhPidUkb4w4zsGg4JkNZGVbcaQ&s',lastMessage:'!!!'},
    { id:6,name:'Charles',picture:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ1-tiy7YDb83_KFy-AySQBYfkuEAN75tg5Q&s',lastMessage:'$$$'},
    { id:7,name:'Vimal',picture:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYYpk68VRwbnURC-3XckFa4Jlnx9wNjtQrpQ&s',lastMessage:'...'}
];

const initialMessages = [
    { conversationId: 1, sender: 'John Doe', content: 'Hey, how are you?' },
    { conversationId: 1, sender: 'You', content: 'I am good, how about you?' },
    { conversationId: 1, sender: 'John Doe', content: 'Doing well, thanks!' },
    { conversationId: 2, sender: 'Jane Smith', content: 'What are you up to?' },
    { conversationId: 2, sender: 'You', content: 'Just working on some projects.' },
    { conversationId: 3, sender: 'Michael Brown', content: 'Let\'s catch up later!' },
    { conversationId: 4, sender: 'Emily White', content: 'Can you help me with something?' },
    { conversationId: 5, sender: 'Johnson', content: 'Have a nice day' }
];

const MessagePage = () => {
    const [activeChat, setActiveChat] = useState(null);
    const [messages, setMessages] = useState(initialMessages);
    const [newMessage, setNewMessage] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSendMessage = () => {
        if (newMessage.trim() === '') return;

        const newMsg = {
            conversationId: activeChat.id,
            sender: 'You',
            content: newMessage.trim(),
        };

        setMessages([...messages, newMsg]);
        setNewMessage('');
    };

    const filteredConversations = conversations.filter(conv =>
        conv.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredMessages = messages.filter(msg => msg.conversationId === activeChat?.id);

    return (
        <div className="message-page">
            <div className="conversations-list">
                <h2>Messages</h2>
                <div className="search-bari">
                    <FaSearch className="search-icon" />
                    
                    <input
                        type="text"
                        placeholder="Search user..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                {filteredConversations.map((conv) => (
                    <div 
                        key={conv.id} 
                        className="conversation" 
                        onClick={() => setActiveChat(conv)}
                    >
                        <img src={conv.picture} alt={conv.name} />
                        <div>
                            <h4>{conv.name}</h4>
                            <p>{conv.lastMessage}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="chat-area">
                {activeChat ? (
                    <div className="chat-container">
                        <div className="chat-header">
                            <FaChevronLeft 
                                onClick={() => navigate(-1)} // Navigate back to the previous page
                                className="back-icon" 
                            />
                            <img src={activeChat.picture} alt={activeChat.name} />
                            <h4>{activeChat.name}</h4>
                        </div>
                        <div className="chat-messages">
                            {filteredMessages.map((msg, index) => (
                                <div 
                                    key={index} 
                                    className={`chat-message ${msg.sender === 'You' ? 'sent' : 'received'}`}
                                >
                                    <p>{msg.content}</p>
                                </div>
                            ))}
                        </div>
                        <div className="chat-input">
                            <textarea 
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                placeholder="Type a message..." 
                            />
                            <button 
                                className="send-btn" 
                                onClick={handleSendMessage}
                            >
                                <FaPaperPlane />
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="empty-chat">
                        <p>Select a conversation to start messaging</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MessagePage;
