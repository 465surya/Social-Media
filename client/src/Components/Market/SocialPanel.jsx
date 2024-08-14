import React, { useState, useEffect } from "react";
import "./Panel.css";
import "./searchbar.css";
import Navbar from "./Navbar";
import "./buybtn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const SocialPanel = () => {
  const [carData, setCarData] = useState([]);
  const [visibleCars, setVisibleCars] = useState(2);
  const [ratings, setRatings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/data")
      .then((response) => response.json())
      .then((data) => {
        setCarData(data);
        setRatings(
          data.map(() => ({ likes: 0, dislikes: 0, userRating: null }))
        );
      });
  }, []);

  const handleExploreMoreClick = () => {
    setVisibleCars(carData.length);
  };

  const handleRatingClick = (carIndex, type) => {
    setRatings((prevRatings) => {
      const newRatings = [...prevRatings];
      if (type === "like") {
        if (newRatings[carIndex].userRating !== "like") {
          newRatings[carIndex].likes += 1;
          if (newRatings[carIndex].userRating === "dislike") {
            newRatings[carIndex].dislikes -= 1;
          }
          newRatings[carIndex].userRating = "like";
        }
      } else {
        if (newRatings[carIndex].userRating !== "dislike") {
          newRatings[carIndex].dislikes += 1;
          if (newRatings[carIndex].userRating === "like") {
            newRatings[carIndex].likes -= 1;
          }
          newRatings[carIndex].userRating = "dislike";
        }
      }
      return newRatings;
    });
  };

  const filteredCars = carData.filter((car) =>
    car.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="marke">
      <div class="text-container">
        <Navbar />
        <span class="mp">MARKET</span>
        <div class="ma">PLACE</div>
      </div>

      <div className="search-container">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
        <input
          type="text"
          placeholder="Search.."value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
          style={{ color: "grey", fontWeight: "400" }}
        />
      </div>

      <div className="grid-container">
        {filteredCars.slice(0, visibleCars).map((car, index) => (
          <div key={car.id} className="car-container">
            <div className="car">
              <div className="car-preview">
                <img src={car.image} alt="Car Preview" className="car-image" />
              </div>
              <div className="car-info">
                <h2 className="car-title">{car.title}</h2>
                <div className="box">
                  <h4>Price: {car.price}</h4>
                  <p>Mileage: {car.mileage}</p>
                  <p>Condition: {car.condition}</p>
                  <p>Location: {car.location}</p>
                </div>
                <div className="car-specs">{car.carSpecs}</div>
                <a
                  href={car.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  <p>BOOK NOW</p>
                </a>

                <div className="post-ratings-container">
                  <div
                    className={`post-rating ${
                      ratings[index].userRating === "like"
                        ? "post-rating-selected"
                        : ""
                    }`}
                    onClick={() => handleRatingClick(index, "like")}
                  >
                    <span className="post-rating-button material-icons">
                      <FontAwesomeIcon icon={faThumbsUp} />
                    </span>
                    <span className="post-rating-count">
                      {ratings[index].likes}
                    </span>
                  </div>
                  <div
                    className={`post-rating ${
                      ratings[index].userRating === "dislike"
                        ? "post-rating-selected"
                        : ""
                    }`}
                    onClick={() => handleRatingClick(index, "dislike")}
                  >
                    <span className="post-rating-button material-icons">
                      <FontAwesomeIcon icon={faThumbsDown} />{" "}
                    </span>
                    <span className="post-rating-count">
                      {ratings[index].dislikes}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleCars < filteredCars.length && (
        <div className="floating-text">
          <a onClick={handleExploreMoreClick}>Explore more</a>
        </div>
      )}
      <div className="social-panel">
        <h4>Socials</h4>
        <ul>
          <li>
            <a
              href="https://x.com/search?q=cars&src=typed_query"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/automobili-lamborghini-s-p-a-"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/marketplace/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/lamborghini/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialPanel;
