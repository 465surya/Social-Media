import { useState } from "react";
import PropTypes from "prop-types";
import profile from "../home/img/profile.webp";
import profile1 from "../home/img/profile1.jpg";
// import profile2 from "../home/img/profile2.webp";
import profile3 from "../home/img/profile3.jpg";
import "./Suggestions.css";

const Suggestions = ({ suggestions }) => {
  const [followedUsers, setFollowedUsers] = useState(
    suggestions.map(() => false) // Initial follow state for each user
  );

  const handleToggleFollow = (index) => {
    setFollowedUsers((prev) => {
      const newFollowedUsers = [...prev];
      newFollowedUsers[index] = !newFollowedUsers[index];
      return newFollowedUsers;
    });
  };

 

  return (
    <div className="suggestions-container1">
      <div className="profile-section1">
        <img src={profile} alt="Your Profile" className="profile-avatar1" />
        <div className="profile-info1">
          <p className="profile-name1">r_o_s_h_a_n_o_k</p>
        </div>
        <p className="profile-user1">Roshan</p>
      </div>
      <h3 className="header1">Suggested for You</h3>
      <ul className="suggestions-list1">
        {suggestions.map((user, index) => (
          <li key={index} className="suggestion-item1">
            <img
              src={user.avatar}
              alt={`${user.name}'s avatar`}
              className="avatar1"
            />
            <div className="suggestion-info1">
              <p className="suggestion-name1">{user.name}</p>
              <label className="switch1">
                <input
                  type="checkbox"
                  checked={followedUsers[index]}
                  onChange={() => handleToggleFollow(index)}
                />
                <span className="slider1"></span>
              </label>
              <span className="follow-status1">
                {followedUsers[index] ? "Following" : "Follow"}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

Suggestions.propTypes = {
  suggestions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// Example usage of the Suggestions component
const App = () => {
  const suggestionsData = [
    { name: "Alice", avatar: profile1 },
    { name: "Bob", avatar: profile1 },
    { name: "Charlie", avatar: profile3 },
    { name: "Charlie", avatar: profile3 },
    { name: "Charlie", avatar: profile1 },
  ];

  return (
    <div className="app1">
      <Suggestions suggestions={suggestionsData} />
    </div>
  );
};

export default App;
