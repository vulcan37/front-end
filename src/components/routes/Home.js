import React, { useState, useEffect } from "react";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { blueGrey } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import moment from "moment";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import TelegramIcon from "@mui/icons-material/Telegram";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://192.168.55.104:5000/api/v1/posts", {
      method: "GET",
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        console.log(data.Posts[0]._id);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      {posts.length !== 0 && (
        <div style={{ marginTop: "70px" }}>
          {posts.Posts.map((post) => (
            <div key={post._id}>
              <div className="card home-card">
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: blueGrey[500] }} aria-label="recipe">
                      {post.name[0]}
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={post.name}
                  subheader={moment(post.createdAt)
                    .add(330, "minutes")
                    .format("DD/MM/YYYY")}
                />

                <div className="card-image">
                  <img
                    style={{ width: "400px", height: "500px" }}
                    src={post.image}
                    alt={post.caption}
                  />
                  <span
                    className="material-icons"
                    style={{ marginRight: "12px", color: "red" }}
                  >
                    favorite
                  </span>
                  <span style={{ marginRight: "12px" }}>
                    <ChatBubbleOutlineRoundedIcon />
                  </span>
                  <span>
                    <TelegramIcon />
                  </span>
                </div>
                <div className="card-content">
                  <p>
                    <span style={{ fontWeight: "bold" }}>{post.name} </span>
                    {post.caption}
                  </p>
                  <input type="text" placeholder="add a comment" />
                  <p>view all comments</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
