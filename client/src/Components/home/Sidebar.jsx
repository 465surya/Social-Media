import { useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import pro from "../home/img/profile1.jpg";
import verify from "../home/img/veri.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faHome,
  faMagnifyingGlass,
  faPlus,
  faShop,
  faToggleOn,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import NewPost from "./NewPost";

function Sidebar({ open, onClose }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handlePostCreated = (newPost) => {
    console.log("New post created:", newPost);
    // Optionally add the new post to your state
    closeModal();
  };

  return (
    <div className={`sidebar ${open ? "open" : "closed"}`}>
      <button
        onClick={onClose}
        className="close-button"
        aria-label="Close Sidebar"
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <div className="profile">
        <div className="profile-img">
          <img src={pro} alt="Profile" />
        </div>
        <div className="name">
          <h1>r_o_s_h_a_n_o_k</h1>
          <img src={verify} alt="Verified Badge" />
        </div>
        <span>@Roshan</span>
      </div>
      <div className="navigation">
        <NavLink to="/" className="nav-link" activeClassName="active">
          <FontAwesomeIcon icon={faHome} />
          <span>Home</span>
        </NavLink>
        <NavLink to="/shorts" className="nav-link">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <span>Explore</span>
        </NavLink>
        {/* <NavLink to="#" onClick={openModal} className="nav-link">
          <FontAwesomeIcon icon={faPlus} />
          <span>Create</span>
        </NavLink> */}
        <NavLink to="/social" className="nav-link">
          <FontAwesomeIcon icon={faShop} />
          <span>Marketplace</span>
        </NavLink>
        <NavLink
          to="setting"
          className="nav-link"
        >
          <FontAwesomeIcon icon={faGear} />
          <span>Settings</span>
        </NavLink>
        <NavLink to="appearance" className="nav-link">
          <FontAwesomeIcon icon={faToggleOn} />
          <span>Switch appearance</span>
        </NavLink>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button
              onClick={closeModal}
              className="close-button"
              aria-label="Close Modal"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <NewPost onPostCreated={handlePostCreated} />
          </div>
        </div>
      )}
    </div>
  );
}

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Sidebar;
