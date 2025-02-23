import React from "react";
import "./list.css";
import Userinfo from "./userInfo/UserInfo";
import ChatList from "./chatList/ChatList";

const List = () => {
  return (
    <div className="list">
      <Userinfo />
      <ChatList />
    </div>
  );
};

export default List;
