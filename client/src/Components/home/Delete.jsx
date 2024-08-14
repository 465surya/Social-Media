import axios from "axios";
import React, { useEffect, useState } from "react";

const Delete = () => {
  const [data, setData] = useState([]);
  const fetchData = () => {
    axios
      .get("http://localhost:3000/post/data")
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handledelete = (id) => {
    axios.delete(`http://localhost:3000/post/data/${id}`);
    fetchData();
  };
  return (
    <div style={{ backgroundColor: "yellow" }}>
      {data.map((item, index) => {
        return (
          <h1>
            {item.name} - {item.image}{" "}
            <button onClick={() => handledelete(item._id)}>Delete</button>
          </h1>
        );
      })}
    </div>
  );
};

export default Delete;
