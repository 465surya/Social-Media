import { useState } from 'react';
import PropTypes from 'prop-types';
import './EditProfileCard.css';

const EditProfileCard = ({ currentImage, currentBio, currentUsername, onUpdate, onClose }) => {
    const [newImage, setNewImage] = useState(currentImage);
    const [newBio, setNewBio] = useState(currentBio);
    const [newUsername, setNewUsername] = useState(currentUsername);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setNewImage(imageURL);
        }
    };

    const handleBioChange = (e) => {
        setNewBio(e.target.value);
    };

    const handleUsernameChange = (e) => {
        setNewUsername(e.target.value);
    };

    const handleSave = () => {
        onUpdate(newImage, newBio, newUsername);
        onClose();
    };

    return (
        <div className="edit-profile-card">
            <div className="edit-profile-header">
                <h3>Edit Profile</h3>
                <button className="close-btn" onClick={onClose}>X</button>
            </div>
            <div className="edit-profile-body">
                <div className="edit-profile-image">
                    <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleImageChange} 
                    />
                    {newImage && <img src={newImage} alt="Profile Preview" />}
                </div>
                <div className="edit-profile-username">
                    <label>Username:</label>
                    <input 
                        type="text" 
                        value={newUsername} 
                        onChange={handleUsernameChange} 
                    />
                </div>
                <div className="edit-profile-bio">
                    <label>Bio:</label>
                    <textarea 
                        placeholder="Update your bio..." 
                        value={newBio} 
                        onChange={handleBioChange} 
                    />
                </div>
            </div>
            <div className="edit-profile-footer">
                <button className="save-btn" onClick={handleSave}>Save</button>
            </div>
        </div>
    );
};

EditProfileCard.propTypes = {
    currentImage: PropTypes.string.isRequired,
    currentBio: PropTypes.string.isRequired,
    currentUsername: PropTypes.string.isRequired,
    onUpdate: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default EditProfileCard;
