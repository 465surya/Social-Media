import  { useState } from 'react';
import './Profile.css';
import { FaUserPlus, FaThumbsUp, FaComment, FaShare } from 'react-icons/fa'; 
import SuggestionCard from './SuggestionCard';
import EditProfileCard from './EditProfileCard';
import MessageCard from './MessageCard';

const Profile = () => {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [showEditProfile, setShowEditProfile] = useState(false);
    const [followersCount, setFollowersCount] = useState(500);
    const [profileImage, setProfileImage] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEyAKEhMksayr1bHbmUAJf3s_bMCgY4yXF9w&s');
    const [profileBio, setProfileBio] = useState('Bio description goes here. Passionate about coding, photography, and traveling.');
    const [profileUsername, setProfileUsername] = useState('Roshan');
    const [showMessageCard, setShowMessageCard] = useState(false);
    const [messageProfile, setMessageProfile] = useState(null);

    const suggestions = [
        { id: 1, name: 'John Doe', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZkdVqYEiqJwQDD8nN1SENRnkGgUH6ZMfdKQ&s' },
        { id: 2, name: 'Jane Smith', picture: 'https://ashisheditz.com/wp-content/uploads/2024/03/stylish-whatsapp-dp-for-boys-hd.jpg' },
        { id: 3, name: 'Michael Brown', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9oHsGJf--aeyTS2HTk3atXJ8ogmoXRyzUbQ&s' },
        { id: 4, name: 'Emily White', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCyeH3vW5tixoNWmYBPCrGZZ7L5Y8DhW1NSA&s' },
    ];

    const posts = [
        {
            id: 1,
            imageUrl: 'https://images.pexels.com/photos/3560168/pexels-photo-3560168.jpeg?auto=compress&cs=tinysrgb&w=400',
            date: 'Published on: Aug 1, 2024',
        },
        {
            id: 2,
            imageUrl: 'https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&w=400',
            date: 'Published on: Jul 29, 2024',
        },
        {
            id: 3,
            imageUrl: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=400',
            date: 'Published on: Jul 25, 2024',
        },
    ];

    const handleFollowChange = (isFollowing) => {
        setFollowersCount(prevCount => prevCount + (isFollowing ? 1 : -1));
    };

    const handleProfileUpdate = (newImage, newBio, newUsername) => {
        setProfileImage(newImage);
        setProfileBio(newBio);
        setProfileUsername(newUsername);
    };

    const handleMessageClick = (profile) => {
        setMessageProfile(profile);
        setShowMessageCard(true);
    };

    return (
        <div className="profile-container">
            <div className="profile-header">
                <div className="profile-pic">
                    <img src={profileImage} alt="Profile" />
                </div>
                <div className="profile-info">
                    <div className="profile-name-section">
                        <h2>{profileUsername}</h2>
                        <div className="profile-actions">
                            <button 
                                className="edit-profile-btn"
                                onClick={() => setShowEditProfile(true)}
                            >
                                Edit Profile
                            </button>
                            <FaUserPlus 
                                className="suggestion-icon" 
                                title="Suggestions" 
                                onClick={() => setShowSuggestions(!showSuggestions)} 
                            />
                        </div>
                    </div>
                    <div className="profile-stats">
                        <span><strong>100</strong> posts</span>
                        <span><strong>{followersCount}</strong> followers</span>
                        <span><strong>300</strong> following</span>
                    </div>
                    <div className="profile-bio">
                        <p>{profileBio}</p>
                    </div>
                    <div className="additional-info">
                        <h3>Contact Info</h3>
                        <p>Email: roshan@example.com</p>
                        <p>Location: San Francisco, CA</p>
                    </div>
                </div>
            </div>
            {showSuggestions && (
                <div className="suggestions-container">
                    {suggestions.map(profile => (
                        <SuggestionCard 
                            key={profile.id} 
                            profile={profile} 
                            onFollowChange={handleFollowChange} 
                            onMessageClick={handleMessageClick}
                        />
                    ))}
                </div>
            )}
            <div className="profile-posts">
                <div className="post-grid">
                    {posts.map(post => (
                        <div key={post.id} className="post-item">
                            <img src={post.imageUrl} alt={`Post ${post.id}`} />
                            <div className="post-icons">
                                <FaThumbsUp className="post-icon" />
                                <FaComment className="post-icon" />
                                <FaShare className="post-icon" />
                            </div>
                            <div className="post-date">{post.date}</div>
                        </div>
                    ))}
                </div>
            </div>
           
            {showEditProfile && (
                <EditProfileCard 
                    currentImage={profileImage} 
                    currentBio={profileBio} 
                    currentUsername={profileUsername}
                    onUpdate={handleProfileUpdate} 
                    onClose={() => setShowEditProfile(false)} 
                />
            )}
            {showMessageCard && messageProfile && (
                <MessageCard 
                    profile={messageProfile} 
                    onClose={() => setShowMessageCard(false)} 
                />
            )}
        </div>
    );
};

export default Profile;
