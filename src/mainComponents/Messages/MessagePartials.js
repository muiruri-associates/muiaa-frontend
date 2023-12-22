import PropTypes from "prop-types"
import parse from "html-react-parser";
import { UserAvatar } from "../../components/Component";
import { findUpper } from "../../utils/Utils";
import React from "react";

export const ReplyItem = ({ item }) => {
  const { sender,  description, note,  message, _id, created_at} = item;
  return (
    <div className="nk-reply-item" key={_id}>
      <div className="nk-reply-header">
        <div className="user-card">
          <UserAvatar size="sm" text={findUpper(description)} />
          <div className="user-name">{sender}</div>
        </div>
        <div className="date-time">{created_at}</div>
      </div>
      <div className="nk-reply-body">
        <div className={`nk-reply-entry entry ${note ? "note" : ""}`}>
          {message.map((message, idx) => {
            return <p key={idx}>{message}</p>;
          })}
        </div>
        <div className="nk-reply-from">
          {note ? "Private note" : "Replied"} by <span>{sender}</span> at {created_at}
        </div>
      </div>
    </div>
  );
};

ReplyItem.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.any,
    created_at: PropTypes.any,
    description: PropTypes.any,
    message: PropTypes.shape({
      map: PropTypes.func
    }),
    note: PropTypes.any,
    sender: PropTypes.any,
    title: PropTypes.any
  })
}

export const MetaItem = ({ item }) => {
  return <div className="nk-reply-meta">{parse(item)}</div>;
};

MetaItem.propTypes = {
  item: PropTypes.any
}
