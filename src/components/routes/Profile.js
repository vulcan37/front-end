import React, { useState, useEffect } from "react";
function Profile() {
  const [name, setName] = useState('');
  useEffect(() => {
    fetch("http://192.168.55.104:5000/getName", {
      method: "GET",
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div
      className="header-height"
      style={{ maxWidth: "700px", margin: "0 auto" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "18px 0",
          borderBottom: "1px solid grey",
        }}
      >
        <div>
          <img
            src="https://th.bing.com/th/id/OIP.EMSxFRXAbf2-s0k-TR_iIQHaHa?w=201&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="none"
            style={{ borderRadius: "50%", width: "200px" }}
          />
        </div>

        <div>
          <h4 style={{ textAlign: "center" }}>{name}</h4>
          <div
            style={{
              display: "flex",
              width: "109%",
              justifyContent: "space-between",
            }}
          >
            <h6>40 posts </h6>
            <h6>38 following </h6>
            <h6>100 followers </h6>
          </div>
        </div>
      </div>
      <div className="gallery"></div>
      <img
        src="https://th.bing.com/th?id=OIP.lfpkO9Hp2flQu9MiiPoNKwHaKh&w=209&h=298&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
        alt=""
        className="gallery-images"
      />
      <img
        src="https://th.bing.com/th/id/OIP.X5iY0y6hDv_FnhvlfXXC2gHaHa?w=201&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        alt=""
        className="gallery-images"
      />
      <img
        src="https://th.bing.com/th/id/OIP.7ZhFt_lveiqjf7q4VzJGdgHaEK?w=302&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        alt=""
        className="gallery-images"
      />

      <img
        src="https://th.bing.com/th/id/OIP.dfsmoKlU3qz34Cn7J6A8-gHaHa?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        alt=""
        className="gallery-images"
      />
      <img
        src="https://th.bing.com/th/id/OIP.Sg4xrqnODn1eTo0jCcuV0QHaEK?w=326&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        alt=""
        className="gallery-images"
      />
      <img
        src="https://th.bing.com/th/id/OIP.HFGJf5D_qvKozdvhjovc5QHaDt?w=341&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        alt=""
        className="gallery-images"
      />
      <img
        src="https://th.bing.com/th?id=OIP.lfpkO9Hp2flQu9MiiPoNKwHaKh&w=209&h=298&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
        alt=""
        className="gallery-images"
      />
      <img
        src="https://th.bing.com/th/id/OIP.X5iY0y6hDv_FnhvlfXXC2gHaHa?w=201&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        alt=""
        className="gallery-images"
      />
      <img
        src="https://th.bing.com/th/id/OIP.7ZhFt_lveiqjf7q4VzJGdgHaEK?w=302&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        alt=""
        className="gallery-images"
      />
    </div>
  );
}

export default Profile;
