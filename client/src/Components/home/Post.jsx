import { useState } from "react";
import PropTypes from "prop-types";
// import profile from "../home/img/landa.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBan,
  faBookmark,
  faComment,
  faDownload,
  faEllipsis,
  faHeart,
  faLink,
  faPaperPlane,
  faTrash,
  faUserMinus,
} from "@fortawesome/free-solid-svg-icons";
import "./Post.css";

const Post = ({ name, location, image, profileImage, onDelete }) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1); // Toggle like count
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div className="container">
      <div className="post-container">
        <div className="post-title">
          <div className="post-left">
            <div className="image">
              <img src={profileImage} alt="profile" width="32" height="32" />
            </div>
            <div className="details">
              <p className="name">{name}</p>
              <p className="location">{location}</p>
            </div>
          </div>
          <div className="post-right" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faEllipsis} />
            {showMenu && (
              <div className="dropdown-menu">
                <p onClick={onDelete}>
                  <i className="ri-delete-bin-line">
                    <FontAwesomeIcon icon={faTrash} />
                  </i>
                  Delete
                </p>
                <p>
                  <i className="ri-bookmark-line">
                    <FontAwesomeIcon icon={faDownload} />
                  </i>
                  Save
                </p>
                <p>
                  <i className="ri-link">
                    <FontAwesomeIcon icon={faLink} />
                  </i>
                  Copy Link to Post
                </p>
                <p>
                  <i className="ri-eye-off-line">
                    <FontAwesomeIcon icon={faUserMinus} />
                  </i>
                  Unfollow
                </p>
                <p>
                  <i className="ri-flag-fill">
                    <FontAwesomeIcon icon={faBan} />
                  </i>
                  Report
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="post-content">
          <img src={image} alt="post" width="500" height="500" />
        </div>
        <div className="post-footer">
          <div className="like-share-comment">
            <i
              className={`ri-heart ${liked ? "liked" : ""}`}
              onClick={handleLike}
            >
              <FontAwesomeIcon icon={faHeart} />
            </i>
            <i className="ri-send-plane-fill">
              <FontAwesomeIcon icon={faPaperPlane} />
            </i>
            <i className="ri-chat-4-line"></i>
            <FontAwesomeIcon icon={faComment} />
          </div>
          <div className="save">
            <i className="ri-bookmark-line">
              <FontAwesomeIcon icon={faBookmark} />
            </i>
          </div>
        </div>
        <div className="post-footer-content">
          <p className="likes">{likes} likes</p>
          <p className="comments">View all {comments.length} comments</p>
          <p className="posting-time">11 hours ago</p>
        </div>
        <div className="comment-section">
          <form onSubmit={handleCommentSubmit}>
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment..."
            />
            <button type="submit">Post</button>
          </form>
          <div className="comment-list">
            {comments.map((comment, index) => (
              <p key={index} className="comment">
                {comment}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Post;
