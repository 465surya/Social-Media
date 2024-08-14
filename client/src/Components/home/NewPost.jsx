import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const NewPost = ({ onPostCreated }) => {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/api/post", {
        name,
        place,
        image,
      });

      if (response.status === 201) {
        onPostCreated(response.data); // Notify parent component
        setName("");
        setPlace("");
        setImage("");
      }
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Place"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
        required
      />
      <input
        type="url"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

NewPost.propTypes = {
  onPostCreated: PropTypes.func.isRequired,
};

export default NewPost;
