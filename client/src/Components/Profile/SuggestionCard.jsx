import { useState } from 'react';
import PropTypes from 'prop-types';
import './SuggestionCard.css';

const SuggestionCard = ({ profile, onFollowChange, onMessageClick }) => {
    const [isFollowing, setIsFollowing] = useState(false);

    const toggleFollow = () => {
        setIsFollowing(!isFollowing);
        onFollowChange(!isFollowing);
    };

    return (
        <div className="suggestion-card">
            <img src={profile.picture} alt={profile.name} className="suggestion-avatar" />
            <div className="suggestion-info">
                <h4>{profile.name}</h4>
                <div className="suggestion-actions">
                    <button className="follow-btn" onClick={toggleFollow}>
                        {isFollowing ? 'Unfollow' : 'Follow'}
                    </button>
                    <button 
                        className="message-btn" 
                        onClick={() => onMessageClick(profile)}
                    >
                        Message
                    </button>
                </div>
            </div>
        </div>
    );
};

SuggestionCard.propTypes = {
    profile: PropTypes.shape({
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    }).isRequired,
    onFollowChange: PropTypes.func.isRequired,
    onMessageClick: PropTypes.func.isRequired,
  };

export default SuggestionCard;
