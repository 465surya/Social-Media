import PropTypes from 'prop-types';
import profile from "../home/img/landa.jpg";
import profile1 from "../home/img/profile1.jpg";
import profile3 from "../home/img/profile3.jpg";
import profile4 from "../home/img/profile4.jpg";
import profile5 from "../home/img/profile5.jpg";
import profile6 from "../home/img/profile6.jpg";
import Suggestions from "./Suggestions";
import Post from './Post';
import "./Posts.css";

const profileImages = [profile1, profile3, profile4, profile5, profile6];

const Posts = ({ posts, onDelete }) => {
  return (
    <div className="story-contain">
      {/* Stories Section */}
      <div className="stories">
        {/* stories1 */}
        <div className="stories-img">
          <img src={profile1} alt="profile" />
          <div className="add">+</div>
          <p>r_o_s_h_a_n_o_k</p>
        </div>

        {/* stories2 */}
        <div className="stories-img">
          <img src={profile4} alt="profile" />
          <p>Sunil</p>
        </div>

        {/* stories3 */}
        <div className="stories-img">
          <img src={profile3} alt="profile" />
          <p>Flora</p>
        </div>

        {/* stories4 */}
        <div className="stories-img">
          <img src={profile4} alt="profile" />
          <p>David</p>
        </div>

        {/* stories5 */}
        <div className="stories-img">
          <img src={profile5} alt="profile" />
          <p>Johnson</p>
        </div>

        {/* stories6 */}
        <div className="stories-img">
          <img src={profile6} alt="profile" />
          <p>Rithick</p>
        </div>

        {/* stories7 */}
        <div className="stories-img">
          <img src={profile} alt="profile" />
          <p>Rachel</p>
        </div>
      </div>

      {/* Posts Section */}
      {posts.length > 0 ? (
        posts.map((post,index) => (
          <Post
            key={post.id}
            name={post.name}
            location={post.place } 
            image={post.Image}
            profileImage={profileImages[index % profileImages.length]}
            onDelete={() => onDelete(post.id)}
          />
        ))
      ) : (
        <p style={{ textAlign: 'center', fontSize: '40px',color:'white' }}>No posts available</p>

      )}
      <Suggestions />
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Posts;
