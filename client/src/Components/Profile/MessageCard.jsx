// import React from 'react';
import PropTypes from 'prop-types';
import './MessageCard.css';

const MessageCard = ({ profile, onClose }) => {
    return (
        <div className="message-card">
            <div className="message-card-header">
                <h4>Message {profile.name}</h4>
                <button onClick={onClose} className="close-btn">X</button>
            </div>
            <div className="message-card-body">
                <img src={profile.picture} alt={profile.name} />
                <textarea placeholder="Type your message..." />
                <button className="send-btn">Send</button>
            </div>
        </div>
    );
};

MessageCard.propTypes = {
    profile: PropTypes.shape({
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired
    }).isRequired,
    onClose: PropTypes.func.isRequired
};

export default MessageCard;
